<template lang="jade">
  nav.home-menu
    a.letter-breaker(v-link="'/work'") WORK
    a.letter-breaker(v-link="'/about'") ABOUT
  #home-bg(transition="home")
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
        utility.letterBreaker('.letter-breaker')
        utility.setId('body','home')
        setTimeout(function(){
          $('.home-menu').addClass('fade-in-slow')
        }, 500)
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
        setTimeout(function(){
          $('#workslides').animate({ opacity: 1 }, 2000,)
        }, 500);
      }, 1000);
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
      padding: 2rem
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

  //
  body#home
    html.mobile
      nav.home-menu
        min-height: calc(100vh - 24rem)
        padding-bottom: 3rem
    html.desktop
      nav.home-menu
        min-height: calc(100vh - 8rem)
        padding-bottom: 0

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
    opacity: 0
    align-content: center
    a
      @extend %black-shadow
      //@extend %gradient-button
      width: 100%
      background-color: $white
      overflow: hidden
      border: 3px outset $lt-grey
      text-align: center
      margin: 1rem 0
      
      &:hover
        //@extend %gradient-button-hover
        text-decoration: none!important
        border-color: darken($lt-grey, 12)
        //span
          //color: purple

  .letter-breaker
    -webkit-text-stroke-width: 1px
    -webkit-text-stroke-color: black
    -webkit-font-smoothing: antialiased
    span
      @extend %smooth

    span:nth-child(1n)
      color: red
    span:nth-child(2n)
      color: blue
    span:nth-child(3n)
      color: yellow
    span:nth-child(4n)
      color: green
    span:nth-child(5n)
      color: magenta

    &:hover
      span:nth-child(1n)
        color: purple
      span:nth-child(2n)
        color: orange
      span:nth-child(3n)
        color: pink
      span:nth-child(4n)
        color: aqua
      span:nth-child(5n)
        color: lime

</style>