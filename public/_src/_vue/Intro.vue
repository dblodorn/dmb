<template lang="jade">
  #top-shell(transition="home")
    a(v-link="'/work'") WORK
    a(v-for="links in footer_links" v-link="links.link" target="_blank") {{links.site}}
</template>

<script>
  export default {
    data () {
      return {
        footer_links: [
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

  setTimeout(function(){
    document.getElementById('top-shell').style.opacity = 1;
  }, 400);

</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  #top-shell
    @extend %container-padding
    @extend %smooth-slow
    display: flex
    align-items: flex-end
    justify-content: center
    flex-direction: column
    position: fixed
    z-index: 100
    height: calc(100vh - 6rem)
    width: 100vw
    top: 0
    opacity: 0
    overflow-y: scroll

  a
    font-family: $pdu
    text-transform: uppercase
    color: $black
    font-size: 14vw
    padding-bottom: 4rem
    &:hover
      text-decoration: line-through

</style>