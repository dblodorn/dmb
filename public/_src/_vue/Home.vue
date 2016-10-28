<template lang="jade">
  nav.home-menu(transition="home-nav")
    a(v-link="'/work'") WORK
    a(v-link="'/about'") ABOUT
  #home-bg(transition="home")
    aside#workslides
      ul
        li(v-for="slide in project_slides" v-bind:style="{ backgroundImage: 'url('+ slide +')' }")
</template>

<script>
  
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        project_slides: [
          "imgs/projects/db13/db13-cover@2x.jpg",
          "imgs/projects/xiv/xiv-cover@2x.jpg",
          "imgs/projects/15x19/15x19-cover@2x.jpg",
          "imgs/projects/tif-sigfrids/tif-sigfrids-cover@2x.jpg",
          "imgs/projects/sls/sls-cover@2x.jpg",
          "imgs/projects/zero-one/zero-one-cover@2x.jpg"
        ]
      }
    },
    route: {
      canReuse: false,
        activate: function() {
        utility.setId('body','home')
      }
    },
    ready: function(){
      setTimeout(function(){
        setTimeout(function(){
          $('#workslides').animate({ opacity: 1 }, 1000,)
        }, 1000)
      }, 1000);
      setTimeout(function(){
        $('.home-menu').animate({ opacity: 1 }, 250,)
      }, 500)
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/vendor/unslider.sass"
  @import "../_sass/vendor/unslider-dots.sass"
  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  html.mobile
    nav.home-menu
      justify-content: center
      padding: 2rem 2rem 0
      a
        font-size: 28vw
        padding: 2rem 2rem
  
  html.desktop
    nav.home-menu
      justify-content: flex-end
      a
        max-width: 42vw
        height: 14vw
        padding: 0 2rem

  #home-bg
    width: 100%
    height: 100%
    display: block
    position: fixed
    top: 0
    right: 0
    z-index: 10

  // SLIDESHOW
  aside#workslides
    @extend %full-screen
    position: fixed
    top: 0
    left: 0
    opacity: 0
    ul
      @extend %full-bg
      li
        @extend %full-bg
        @extend %full-screen

  nav.home-menu
    @extend %nav-shell
    align-content: center
    position: absolute
    a
      @extend %black-shadow
      +stroke-type($white,$black,2px)
      width: 100%
      overflow: hidden
      text-align: center
      margin: 1rem 0
      border: 2px solid $black
      background-color: $white
      &:hover
        background-color: $hover-bg
        text-decoration: none!important

</style>