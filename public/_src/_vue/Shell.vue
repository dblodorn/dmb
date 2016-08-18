<template lang="jade">
  main
    h1 {{title}}
    #top-shell
      a(v-for="links in footer_links" v-link="links.link" target="_blank" v-on:mouseover="setBgShell") {{links.site}}
    router-view
</template>

<script>
  export default {
    data () {
      return {
        title: "DAIN BLODORN KIM",
        footer_links: [
          {
            site: "DB13",
            link: "http://www.db13.us"
          },
          {
            site: "github",
            link: "https://github.com/dblodorn"
          },
          {
            site: "codepen",
            link: "http://codepen.io/mrdain/"
          }
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  h1,
  a
    font-family: $pdu
    text-transform: uppercase

  h1
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

  a
    color: $black
    font-size: 14vw
    &:hover
      text-decoration: line-through

  main
    width: 100vw
    min-height: 100vh

  #top-shell
    @extend %container-padding
    display: flex
    align-items: flex-end
    justify-content: center
    flex-direction: column
    position: fixed
    z-index: 100
    height: calc(100vh - 6rem)
    width: 100vw
    top: 0

</style>