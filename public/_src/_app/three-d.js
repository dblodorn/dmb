define('threeD', ['three','jquery'], function(THREE,$) {
  
  $('#gl-bg').css({
    'position':'fixed',
    'top': 0,
    'left':0,
    'z-index':0
  });

  // SETUP VARS
  var threeD = {};

  var CONTAINER = document.getElementById('gl-bg'),
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }),
      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 ), 
      scene = new THREE.Scene(),
      raycaster = new THREE.Raycaster(),
      mouse = new THREE.Vector2(), INTERSECTED,
      radius = 100,
      theta = 0,
      parentTransform = new THREE.Object3D(),
      sphereInter,
      currentIntersected;

  // LINES
  threeD.lines = function(){
    function init() {
      
      var geometry = new THREE.SphereGeometry( 5 );
      var material = new THREE.MeshBasicMaterial( { color: 0x348fff } );
      
      sphereInter = new THREE.Mesh(geometry, material);
      
      sphereInter.visible = false;
      
      scene.add( sphereInter );
      
      var geometry  = new THREE.Geometry();
      var point     = new THREE.Vector3();
      var direction = new THREE.Vector3();
      
      for ( var i = 0; i < 50; i ++ ) {
        direction.x += Math.random() - 0.25;
        direction.y += Math.random() - 0.5;
        direction.z += Math.random() - 0.5;
        direction.normalize().multiplyScalar(10);
        point.add( direction );
        geometry.vertices.push( point.clone() );
      }
      
      parentTransform.position.x = Math.random() * 40 - 20;
      parentTransform.position.y = Math.random() * 40 - 20;
      parentTransform.position.z = Math.random() * 40 - 20;
      parentTransform.rotation.x = Math.random() * 2 * Math.PI;
      parentTransform.rotation.y = Math.random() * 2 * Math.PI;
      parentTransform.rotation.z = Math.random() * 2 * Math.PI;
      parentTransform.scale.x = Math.random() + 0.5;
      parentTransform.scale.y = Math.random() + 0.5;
      parentTransform.scale.z = Math.random() + 0.5;
      
      for ( var i = 0; i < 35; i ++ ) {
        var object;
        if ( Math.random() > 0.5 ) {
          object = new THREE.Line( geometry );
        } else {
          object = new THREE.LineSegments( geometry );
        }
        object.position.x = Math.random() * 400 - 200;
        object.position.y = Math.random() * 400 - 200;
        object.position.z = Math.random() * 400 - 200;
        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 3 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;
        object.scale.x = Math.random() + 0.5;
        object.scale.y = Math.random() + 0.75;
        object.scale.z = Math.random() + 1.5;
        parentTransform.add( object );
      }
      
      scene.add( parentTransform );

      raycaster.linePrecision = 3;
      
      renderer.setClearColor( 0xf0f0f0, 0 );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      
      CONTAINER.appendChild(renderer.domElement);
      
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
      //
      window.addEventListener( 'resize', onWindowResize, false );
    }
    
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    
    function onDocumentMouseMove( event ) {
      event.preventDefault();
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }
    
    //
    function animate() {
      requestAnimationFrame( animate );
      render();
    }
    
    function render() {
      theta += 0.1;
      camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
      camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
      camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
      camera.lookAt( scene.position );
      camera.updateMatrixWorld();
      // find intersections
      raycaster.setFromCamera( mouse, camera );
      
      var intersects = raycaster.intersectObjects( parentTransform.children, true);
      
      if ( intersects.length > 0 ) {
        if ( currentIntersected !== undefined ) {
          currentIntersected.material.linewidth = 1;
        }
        currentIntersected = intersects[ 0 ].object;
        currentIntersected.material.linewidth = 15;
        sphereInter.visible = true;
        sphereInter.position.copy( intersects[ 0 ].point );
      } else {
        if ( currentIntersected !== undefined ) {
          currentIntersected.material.linewidth = 1;
        }
        currentIntersected = undefined;
        sphereInter.visible = false;
      }
      
      renderer.render( scene, camera );
    }
    // RUN
    init();
    animate();
  }

  return threeD;

});