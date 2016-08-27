define('utility', function() {

  var utility  = {},
      html = document.querySelector("html");

  utility.setId = function(target,id){
    setTimeout(function(){
      document.querySelector(target).setAttribute('id', id);
    }, 25);
  }

  utility.letterBreaker = function(target){
    setTimeout(function(){
      $(target).each(function() {
        var $this = $(this);
        $this.html($this.text().replace(/(\w)/g, "<span>$&</span>"));
      });
    }, 250);
  }

  return utility;

});