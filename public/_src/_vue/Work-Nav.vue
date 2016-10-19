<template lang="jade">
  #category-nav
    menu
      a(v-link="'/work/web-development'") Web-Development
      a(v-link="'/work/design'") Design
      a(v-link="'/work/art'") Art
      a(v-link="'/work/experimental'") Experimental
  router-view
  aside#workslides
    ul
      li(v-for="slide in project_slides" v-bind:style="{ backgroundImage: 'url('+ slide +')' }")
</template>

<script>
  
  import unslider from 'jquery-unslider'
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        project_slides: [
          "imgs/projects/xiv/xiv-portfolio-landing-desktop@1x.jpg",
          "imgs/projects/tif-sigfrids/tif-sigfrids-portfolio-landing-desktop@1x.jpg",
          "imgs/projects/sls/sls-portfolio-landing-desktop@1x.jpg",
          "imgs/projects/db13/db13-portfolio-landing-desktop@1x.jpg",
          "imgs/projects/zero-one/zero-one-portfolio-landing-desktop@1x.jpg",
          "imgs/projects/15x19/15x19-portfolio-landing-desktop@1x.jpg"
        ]
      }
    },
    route: {
      canReuse: false,
        activate: function() {
          
        $('body').animate({ scrollTop: 0 }, 5);
        
        utility.setId('body','work')
        
      }
    },
    ready: function(){
      setTimeout(function(){
        $('#workslides').unslider({
          nav: false,
          autoplay: true,
          arrows: false,
          animation: 'fade'
        });
      }, 1000);
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/vendor/unslider.sass"
  @import "../_sass/vendor/unslider-dots.sass"
  @import "../_sass/utilities/_utilities.sass"

  #category-nav
    @extend %nav-shell
    padding: 2rem!important
    min-height: initial!important
    z-index: 1000
    menu
      background-color: $black
      border: 2px solid $white
      padding: 1rem
      width: 100%
      a
        color: $white
        font-size: 3rem
        margin-right: 3rem

  aside#workslides
    @extend %full-screen
    position: fixed
    top: 0
    left: 0
    ul
      @extend %full-bg
      li
        @extend %full-bg
        @extend %full-screen

</style>