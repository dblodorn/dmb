define('utility', function() {

  var utility  = {},
      html = document.querySelector("html");

  // SET ID

  utility.setId = function(target,id){
    setTimeout(function(){
      document.querySelector(target).setAttribute('id', id);
    }, 25);
  }

  // LETTER BREAKER

  utility.letterBreaker = function(target){
    setTimeout(function(){
      $(target).each(function() {
        var $this = $(this);
        $this.html($this.text().replace(/(\w)/g, "<span>$&</span>"));
      });
    }, 250);
  }

  // PRELOAD IMAGES

  utility.preload = function (arr) {
    var i = arr.length,
        o,
        d = document,
        b = d.body,
        isIE = /*@cc_on!@*/0;
    while (i--) {
      if (isIE) {
        new Image().src = arr[i];
        continue;
      };
      o = d.createElement('object');
      o.data = arr[i];
      o.className += " visuallyhidden";
      b.appendChild(o);
    };
  } 

  return utility;

});