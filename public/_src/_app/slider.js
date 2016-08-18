define('slider', function() {

  var slider  = {},
      html = document.querySelector("html");

  slider.init = function(){
  
    setTimeout(function(){
    var current = 0,
        slides  = document.querySelectorAll('.slide');
    
    if(slides.length !== 0) {
      homeSlider();
    }

    function homeSlider () {
      setInterval(function() {
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.opacity = 0;
        }
        current = (current != slides.length - 1) ? current + 1 : 0;
          slides[current].style.opacity = 1;
      }, 3000); 
    }

    homeSlider();

    }, 100);

  }

  return slider;

});