<template lang="jade">
  a#dbk(v-link="'/'")
    h1 {{title}}
  main
    router-view
    footer
      .btn.news
        a(v-link="'/news'") NEWS
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

  #dbk
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

  footer
    z-index: 12000

  #footer-bg
    background-color: $black
    z-index: 10
  
  footer,
  #footer-bg
    @extend %aligner-vertical
    height: 8rem
    width: 100vw
    position: fixed
    bottom: 0
    left: 0
    padding: 0 2rem

  .btn.contact
    margin-left: auto

  .btn.new
    margin-right: auto

</style>