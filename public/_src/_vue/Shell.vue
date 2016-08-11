<template lang="jade">
  header
    a(v-link="'/'" v-on:mouseover="setBgShell") {{page.title}}
  main(v-bind:id="$route.params.slug")
    router-view
  footer
    a(v-link="'/about'" v-on:mouseover="setBgShell") about
    a(v-for="links in footer_links" v-link="links.link" target="_blank" v-on:mouseover="setBgShell") {{links.site}}
    a(v-link="mailto:dain@db13.us" v-on:mouseover="setBgShell") dain@db13.us
</template>

<script>
  export default {
    data () {
      return {
        page: {},
        title: "DAIN BLODORN KIM",
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
      activate: function() {
        var data = this.$route.shellData;
        this.$set('page', data);
      }
    },
    methods: {
      setBgShell: function (event) {
        $('aside').removeClass('active');
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  body.home
    header,
    footer
      width: 50vw

  body.project
    header,
    footer
      width: 100vw
    main
      min-height: 100vh
      background-color: $white

  header,
  footer
    @extend %container-padding
  
  header
    border-bottom: 10px solid $black
    z-index: $header-z

  footer
    border-top: 10px solid $black
    z-index: $footer-z
    position: relative
    overflow: hidden

</style>