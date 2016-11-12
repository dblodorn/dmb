<template lang="jade">
  h1 {{headerproject.project_name}} {{$route.params.slug}}hello
</template>

<script>
  
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        headerproject: {}
      }
    },
    route: {
      canReuse: true,
      activate: function() {
        
        var viewSet = function(){
          utility.setId('body','project')
          $('body').animate({ scrollTop: 0 }, 5);
          $('#dbk').addClass('fade-out');
        }

        var id = this.$route.params.slug
        this.$http.get('/data/work/' + id + '.json').then (
        function (data) {
          this.$set('headerproject', data.json());
          //viewSet();
        },
        function (data) {
          alert('Failed to load data');
        });
      
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  html.desktop
    h1
      top: 0
      left: 0
   
  h1
    @extend %black-shadow
    color: $blue
    width: 100vw
    background-color: $white
    z-index: 1500
    border-bottom: $border
    padding: 1rem
    font-size: 4.5rem
    letter-spacing: 2px
    display: block
    position: fixed

</style>