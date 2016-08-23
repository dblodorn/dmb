<template lang="jade">
  #top-shell
    a(v-link="'/work'") WORK
    a(v-link="'/about'") ABOUT
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
    },
    route: {
      canReuse: false,
        activate: function() {
        setTimeout(function(){
          document.getElementById('top-shell').style.opacity = 1;
        }, 250);
      }
    }
  }
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
    &:hover
      text-decoration: line-through

</style>