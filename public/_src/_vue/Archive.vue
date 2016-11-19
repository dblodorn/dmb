<template lang="jade">
  nav.project-menu
    h2 WEB ARCHIVE
    ul.links
      li(v-for="links in work.acf.website_archive")
        a.project-link.link(v-link="links.website_link" target="_blank") {{links.website_title}}
        .archive-copy {{{links.website_description}}}
  aside#bg
</template>

<script>
  
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        work: {}
      }
    },
    route: {
      canReuse: false,
        activate: function() {
          
        $('body').animate({ scrollTop: 0 }, 5);
        
        utility.setId('body','archive')
        
        this.$http.get('https://flatfiles.info/wp-json/wp/v2/posts/12').then (
        function (data) {
          this.$set('work', data.json());
        },
        function (data) {
          alert('Failed to load data');
        }); 
        
        setTimeout(function(){
          $('.project-menu').addClass('fade-in-slow')
          setTimeout(function(){
            $('ul.links').addClass('fade-in-slow')
            setTimeout(function(){
              $('aside#bg').addClass('fade-in-slow')
            }, 1000);
          }, 1000);
        }, 500);

      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  html.mobile
    body#archive
      nav.project-menu
        width: 100vw

  html.desktop
    body#archive
      nav.project-menu
        width: 85vw

  body#archive
    aside#bg
      +h-w-t-b-pos(100vh,100vw,0,0,fixed)
      background-color: rgba(255,255,255,0.85)
      z-index: 3
      opacity: 0
      
    nav.project-menu
      padding: 2rem
      right: 0
      position: absolute
      opacity: 0
      min-height: 100vh
      *
        color: $white
        width: 100%
      h2
        @extend %black-shadow
        width: 82.5vw
        font-family: $pdu
        font-size: 4.25rem
        letter-spacing: 3px
        padding: 2rem
        border: 2px solid $white
        background-color: $black
        text-align: left
        line-height: .75
        position: fixed
        z-index: $header-z

      ul.links
        margin-top: 13rem
        padding-left: 1.5rem
        opacity: 0

      li:last-child
        margin-bottom: 0

      a.project-link
        display: flex
        color: $blue
        text-decoration: underline
        font-size: 4.25rem
        padding-bottom: 1rem
        letter-spacing: 3px
        &:hover
          text-decoration: line-through
      
      p
        font-size: 1.65rem
        max-width: 45rem
        color: $black

</style>