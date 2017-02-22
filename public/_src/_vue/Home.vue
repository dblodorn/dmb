<template lang="jade">
  nav.home-menu(transition="home-nav")
    a(v-link="'/work'") WORK
    a(v-link="'/news'") NEWS
    a(v-link="'/about'") ABOUT
</template>

<script>
  
  import $ from 'jquery'
  import utility from '../_app/utilities.js'

  export default {
    data () {
      return {
        imgpath: 'imgs/projects/',
        project_slides: [
          'tif-sigfrids',
          '15x19',
          'db13'
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
        $('.home-menu').animate({ opacity: 1 }, 250,)
      }, 500)
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  html.mobile
    nav.home-menu
      justify-content: center
      padding: 2rem 2rem 0
      height: 100%
      a
        font-size: 10vh
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
    opacity: 0
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