<template lang="jade">
  section#content
    article.copy-content
      .copy {{{about.dain}}}
      ul.about-links
        li(v-for="links in about.site_links")
          a(v-link="links.link" target="_blank") {{links.site}}
</template>

<script>
  
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        about: {}
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        $('body').animate({ scrollTop: 0 }, 5);
        utility.setId('body','about')
        var data = this.$route.data;
        this.$set('about', data);
        setTimeout(function(){
          $('.copy-content').addClass('fade-in-slow')
        }, 500);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  article
    background-color: $white

  body#about
    background-color: $white

  ul.about-links
    border-top: 1px solid $white
    padding-top: 3.5rem
    width: 100%
    li
      display: block
      margin-bottom: .5rem
    a
      font-size: 3rem
      color: $blue
      line-height: 1.5
      text-decoration: underline
      &:hover
        border: 0
        text-decoration: line-through
</style>