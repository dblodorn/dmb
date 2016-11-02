<template lang="jade">
  a#dbk(v-link="'/'") {{title}}
  .secondary-nav(v-if="$mq.resize && $mq.above('1024px')")
    a.btn.news(v-link="'/news'") NEWS
    a.btn.contact(href="mailto:dain@db13.us") EMAIL
  main
    router-view
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

  html.mobile
    #dbk
      position: absolute
      top: 2rem
      left: 2rem
      font-size: 3rem
      width: calc(100vw - 4rem)
      padding: 1.5rem
      color: $blue
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
      +stroke-type($white,$black,1px)
      font-size: 4.25rem
      position: fixed
      writing-mode: vertical-rl
      text-orientation: sideways-right
      top: 2rem
      left: -2.35rem
      padding: 2rem
      &:hover
        background-color: $hover-bg
      
    body#project
      #dbk
        left: -100vw
      .secondary-nav
        bottom: -20rem
    
  #work-preload
    display: none

  // BASE

  #dbk
    @extend %black-shadow
    font-family: $pdu
    display: block
    text-transform: uppercase
    z-index: 12000
    background-color: $white
    color: $black
    letter-spacing: 3px
    border: 2px solid $black
    opacity: 0

  .secondary-nav
    @extend %aligner-vertical
    z-index: 12000
    position: fixed
    bottom: 0
    left: 0
    padding: 0 2rem
    height: 8rem

  .secondary-nav
    width: 100vw

  .btn.contact
    margin-left: auto

  .btn.new
    margin-right: auto

</style>