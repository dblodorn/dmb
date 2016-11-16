define('Cubes', ['three','jquery'], function(THREE,$) {

  $('#gl-bg2').css({
    'position':'fixed',
    'top': 0,
    'left':0,
    'z-index':0
  });

  // SETUP VARS
    var Cubes = {};

  // ANIMATION
  Cubes.start = function(){
    var CONTAINER = document.getElementById('gl-bg2'),
      renderer = new THREE.WebGLRenderer({ alpha: true }),
      camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 100000 ), 
      scene = new THREE.Scene(),
      raycaster = new THREE.Raycaster();

    var mouse = new THREE.Vector2(), INTERSECTED;
    var radius = 100, theta = 0;

    function init() {
      
      var light = new THREE.DirectionalLight( 0x348fff, 1.5 );
      light.position.set( 1, 2, 1 ).normalize();
      
      scene.add(light);
      
      var geometry = new THREE.BoxBufferGeometry( 100, 30, 1 );
      
      var triangles = 500;

      var colors = new Uint8Array( triangles * 3 * 4 );
        for ( var i = 0, l = triangles * 3 * 4; i < l; i += 4 ) {
          colors[ i     ] = Math.random() * 255;
          colors[ i + 1 ] = Math.random() * 255;
          colors[ i + 2 ] = Math.random() * 255;
          colors[ i + 3 ] = Math.random() * 255;
        }
      
      geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 4, true ) );

      var material = new THREE.RawShaderMaterial( {
          uniforms: {
            time: { value: 1.0 }
          },
          vertexShader: document.getElementById( 'vertexShader' ).textContent,
          fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
          side: THREE.DoubleSide,
          transparent: false
      });

      for ( var i = 0; i < 100; i ++ ) {
        var object = new THREE.Mesh( geometry, material );
        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;
        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;
        object.scale.x = Math.random() + 0.45;
        object.scale.y = Math.random() + 0.45;
        object.scale.z = Math.random() + 0.45;
        object.material.uniforms.time.value = Math.random() + 0.45;
        scene.add( object );
      }

      renderer.setClearColor( 0xffffff, 0 );
      renderer.setPixelRatio( window.devicePixelRatio );
      
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.sortObjects = false;
      
      CONTAINER.appendChild(renderer.domElement);
      
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
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
      
      renderer.render( scene, camera );
      }
      // RUN
      init();
      animate();
    }

  return Cubes;

});