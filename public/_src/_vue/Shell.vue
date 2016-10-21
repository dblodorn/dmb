<template lang="jade">
  a#dbk(v-link="'/'") {{title}}
  .secondary-nav
    a.btn.news(v-link="'/news'") NEWS
    a.btn.contact(href="mailto:dain@db13.us") EMAIL
  main
    router-view
    .secondary-nav-bg
</template>

<script>
  export default {
    data () {
      return {
        title: "DAIN BLODORN KIM",
        imgpath: 'imgs/projects/'
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE

  .visuallyhidden
    border: 0
    clip: rect(0 0 0 0)
    height: 1px
    margin: -1px
    overflow: hidden
    padding: 0
    position: absolute
    width: 1px

  body#project
    #dbk
      left: -100vw

  html.mobile
    #dbk
      position: relative
      top: 0
      left: 0
      font-size: 3rem
      border-bottom: 2px solid $white
      width: 100%
      padding: 1.5rem

    .secondary-nav,
    .secondary-nav-bg
      position: relative
      background-color: $black

    .secondary-nav
      border-bottom: 2px solid $white

    .btn
      border: 0
      width: 50%
      justify-content: flex-start
      padding: 1.5rem
      height: 4.75rem
      a
        font-size: 3rem
        
    .btn.contact
      border-left: 2px solid $white

  html.desktop
    #dbk
      @extend %black-shadow
      font-size: 4.25rem
      position: fixed
      writing-mode: vertical-rl
      text-orientation: sideways-right
      top: 2rem
      left: -2.35rem
      color: $black
      padding: 2rem
      border: 2px solid $black
      background-color: $white

    .secondary-nav,
    .secondary-nav-bg
      position: fixed
      bottom: 0
      left: 0
      padding: 0 2rem
      height: 8rem

  //

  #work-preload
    display: none

  // BASE

  #dbk
    @extend %black-shadow
    @extend %smooth
    +stroke-type($white,$black,1px)
    font-family: $pdu
    display: block
    text-transform: uppercase
    z-index: 12000
    background-color: $black
    color: $white
    letter-spacing: 3px

  .secondary-nav
    @extend %aligner-vertical
    z-index: 12000

  .secondary-nav-bg
    z-index: 10
  
  .secondary-nav,
  .secondary-nav-bg
    width: 100vw

  .btn.contact
    margin-left: auto

  .btn.new
    margin-right: auto

</style>