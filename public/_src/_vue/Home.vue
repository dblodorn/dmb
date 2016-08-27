<template lang="jade">
  nav.home-menu
    a.letter-breaker(v-link="'/work'") WORK
    a.letter-breaker(v-link="'/about'") ABOUT
</template>

<script>
  
  import utility from "../_app/utilities.js"

  export default {
    route: {
      canReuse: false,
        activate: function() {
        utility.letterBreaker('.letter-breaker')
        utility.setId('body','home')
        setTimeout(function(){
          $('.home-menu').addClass('fade-in-slow')
        }, 150)
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  html.mobile
    nav.home-menu
      justify-content: center
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
    @extend %gradient-bg-grey
    html.mobile
      nav.home-menu
        min-height: calc(100vh - 24rem)
        padding-bottom: 3rem
    html.desktop
      nav.home-menu
        min-height: calc(100vh - 8rem)
        padding-bottom: 0

  nav.home-menu
    @extend %nav-shell
    opacity: 0
    align-content: center
    a
      width: 100%
      overflow: hidden
      border: 5px outset #f5dbb3
      background-color: #f3eb63
      text-align: center
      margin: 1rem 0
      
      &:hover
        border-color: darken(#f5dbb3, 9)
        background-color: darken(#f3eb63, 9)

  .letter-breaker
    -webkit-text-stroke-width: 1px
    -webkit-text-stroke-color: black
    -webkit-font-smoothing: antialiased
    span:nth-child(1n)
      color: red

    span:nth-child(2n)
      color: blue

    span:nth-child(3n)
      color: yellow
      
    span:nth-child(4n)
      color: green

</style>