<template lang="jade">
  nav.home-menu
    a.letter-breaker(v-link="'/work'") WORK
    a.letter-breaker(v-link="'/about'") ABOUT
  #home-bg(transition="home")
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
        }, 500)
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
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAN0lEQVQYV2NkYGD4zwABjFAaKwWSJFkhzCSsJiObSLJCrBqwmUiyQhQN+EwkWSE8kGHhiC+8GQCwzgoJeImtBAAAAABJRU5ErkJggg==) repeat
    html.mobile
      nav.home-menu
        min-height: calc(100vh - 24rem)
        padding-bottom: 3rem
    html.desktop
      nav.home-menu
        min-height: calc(100vh - 8rem)
        padding-bottom: 0

  #home-bg
    background-color: grey
    width: 100%
    height: 100%
    display: block
    position: fixed
    top: 0
    right: 0
    z-index: 10

  nav.home-menu
    @extend %nav-shell
    opacity: 0
    align-content: center
    a
      @extend %black-shadow
      @extend %gradient-button
      width: 100%
      overflow: hidden
      border: 5px outset #f3eb63
      text-align: center
      margin: 1rem 0
      
      &:hover
        @extend %gradient-button-hover
        text-decoration: none!important
        border-color: darken(#f3eb63, 12)
        span
          color: purple

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