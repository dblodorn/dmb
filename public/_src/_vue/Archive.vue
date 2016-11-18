<template lang="jade">
  nav.project-menu
    h2 WEB ARCHIVE
    ul.links
      li(v-for="links in work.acf.website")
        a.project-link.link(v-link="links.web_link" target="_blank") {{links.web_title}}
        .archive-copy {{{links.web_description}}}
  aside#bg
</template>

<script>
  
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        work: {},
        description: "Promotional Microsite for A new range of Canon Products. Built in HTML5 / CSS3 with Javascript animations and templating. The site was customized by over 100 retailers to showcase related canon offers they had in store. As this site relied heavily on animations, great care was taken in translating that experience to a mobile environment.",
        site_links: [
          {
            site: "LINKEDIN",
            link: "https://www.linkedin.com/in/dain-blodorn-028324b2"
          },{
            site: "GITHUB",
            link: "https://github.com/dblodorn"
          },{
            site: "CODEPEN",
            link: "http://codepen.io/mrdain/"
          }
        ]
      }
    },
    route: {
      canReuse: false,
        activate: function() {
          
        $('body').animate({ scrollTop: 0 }, 5);
        
        utility.setId('body','archive')
        
        this.$http.get('http://digital.db13.us/wp-json/wp/v2/posts/43').then (
        function (data) {
          this.$set('work', data.json());
          console.log(data.json());
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