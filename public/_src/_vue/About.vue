<template lang="jade">
  section#content
    article.copy-content
      h2 {{about.headline}}
      .copy {{{about.dain}}}
      .about-links
        a(v-for="links in about.site_links" v-link="links.link" target="_blank") {{links.site}}
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

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  body#about
    background-color: $black

  .about-links
    @extend %flex-row-wrap
    display: flex
    border-top: 1px solid $white
    padding-top: 3.5rem
    a
      width: 100%
</style>