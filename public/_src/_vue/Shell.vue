<template lang="jade">
  main
    a#DBK(v-link="'/'")
      h1 {{title}}
    router-view
    footer
      .item  
        a(v-link="'/'") INFO
</template>

<script>
  export default {
    data () {
      return {
        title: "DAIN BLODORN KIM",
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  main
    width: 100vw
    min-height: 100vh

  #DBK
    @extend %smooth-slow
    opacity: 0

  h1
    font-family: $pdu
    text-transform: uppercase
    padding: 2rem
    color: $black
    writing-mode: vertical-rl
    text-orientation: sideways-right
    font-size: 5vw
    display: block
    position: fixed
    top: 2rem
    left: -4rem
    z-index: 120
    background-color: $white
    border: 1rem solid $black
    letter-spacing: 2px

  footer
    display: flex
    align-items: center
    z-index: 12000
    height: 8rem
    width: 100vw
    position: fixed
    bottom: 0
    left: 0
    background-color: $black
    padding: 0 2rem
    .item
      @extend %aligner
      border: 1px solid $white
      width: 8rem
      height: 4rem
      a
        font-family: $pdu
        color: $white
        font-size: 2.5rem
        letter-spacing: 3px

</style>