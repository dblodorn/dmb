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
        utility.setId('main','home')
        setTimeout(function(){
          $('.home-menu').addClass('fade-in-slow')
        }, 150);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  main#home
    background-color: $lt-grey

  nav.home-menu
    @extend %nav-shell
    opacity: 0
    align-content: center
    a
      width: 100%
      text-align: right
    span
      line-height: normal

  .letter-breaker
    -webkit-text-stroke-width: 2px
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