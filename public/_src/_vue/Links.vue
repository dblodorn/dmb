<template lang="jade">
  nav.project-menu
    h2 {{work.list_title}}
    ul.links
      li(v-for="links in work.list_links")
        a.project-link.link(v-link="links.link" target="_blank") {{links.site}}
    ul.foot
      li
        a(v-link="'https://drive.google.com/open?id=0B6t2BVlhSCGqTERqdEl1Qi1aNE0'" target="_blank") DOWNLOAD CV
      li(v-for="outs in site_links")
        a(v-link="outs.link" target="_blank") {{outs.site}}
</template>

<script>
  
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        work: {},
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
        
        utility.setId('body','links')
        
        var id = this.$route.params.slug
        this.$http.get('/data/links/' + id + '.json').then (
        function (data) {
          this.$set('work', data.json());
        },
        function (data) {
          alert('Failed to load data');
        }); 
        
        setTimeout(function(){
          $('.project-menu').addClass('fade-in-slow')
        }, 500);

      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  html.mobile
    nav.project-menu
      width: 100vw

  html.desktop
    nav.project-menu
      width: 85vw

  .link:after
    content: ""
    background-image: url('!~/imgs/icons/link.svg')
    background-repeat: no-repeat
    padding-left: 5vw
    background-size: contain
    margin-left: 1vw
    background-position-y: 50%

  // BASE
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
      width: 100%
      font-family: $pdu
      font-size: 4.25rem
      letter-spacing: 3px
      padding: 2rem
      border: 2px solid $white
      background-color: $black
      text-align: left
      line-height: .75
    ul.foot
      @extend %black-shadow
      width: 100%
      border: 2px solid $white
      background-color: $black
      text-align: left
      padding: 2rem
      a
        font-size: 3rem
        color: $white
    ul.links
      min-height: calc(100vh - 18rem)
      margin-bottom: 12rem

    li
      @extend %clearfix
      margin-bottom: 2rem

    li:last-child
      margin-bottom: 0
    
    a 
      text-align: left
      color: $black
      display: block
      float: left

    a.project-link
      font-size: 8vw

</style>