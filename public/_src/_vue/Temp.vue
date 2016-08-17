<template lang="jade">
  main
    h1 {{title}}
    a(v-for="links in footer_links" v-link="links.link" target="_blank" v-on:mouseover="setBgShell") {{links.site}}
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
          },
          {
            site: "linkedin",
            link: "https://www.linkedin.com/in/dain-blodorn-028324b2"
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
    +type($pdu, 300, 6vw, 1, normal, left, $beige, uppercase, normal)

  a
    @extend %smooth
    &:hover
      text-decoration: line-through

  main
    @extend %container-padding
    width: 100vw
    display: flex
    flex-direction: column

</style>