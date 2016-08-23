<template lang="jade">
  main
    a#DBK(v-link="'/'") {{title}}
    router-view
    footer
      .btn.contact
        a(href="mailto:hello@dain.kim") CONTACT
    #footer-bg
</template>

<script>
  export default {
    data () {
      return {
        title: "DAIN BLODORN KIM"
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  main
    width: 100vw
    min-height: 100vh

  #DBK
    @extend %smooth-slow
    opacity: 0
    font-family: $pdu
    text-transform: uppercase
    padding: 2rem
    color: $white
    writing-mode: vertical-rl
    text-orientation: sideways-right
    font-size: 5vw
    letter-spacing: 3px
    display: block
    position: fixed
    top: 2rem
    left: -2rem
    z-index: 12000
    background-color: $black
    border: 2px solid $white
    letter-spacing: 2px

  #footer-bg
    background-color: $black
    z-index: 10

  footer
    z-index: 12000
  
  footer,
  #footer-bg
    display: flex
    align-items: center
    height: 8rem
    width: 100vw
    position: fixed
    bottom: 0
    left: 0
    padding: 0 2rem

  .btn
    @extend %aligner
    border: 2px solid $white
    height: 4rem
    padding-left: 1.25rem
    padding-right: .75rem
    background-color: $black
    a
      font-family: $pdu
      color: $white
      font-size: 2.5rem
      letter-spacing: 3px

  .btn.contact
    margin-left: auto

</style>