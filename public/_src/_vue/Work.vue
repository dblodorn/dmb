<template lang="jade">
  section
    #work
      ul
        li(v-for="slide in project_slides" v-bind:style="{ backgroundImage: 'url(' + imgpath + slide.project + '/' + slide.project + '-cover@2x.jpg)' }")
    #top-shell
      h1 CLIENT WORK
      a.project-link(v-for="links in project_links" v-link="links.link" target="_blank") {{links.site}}
      h1 PERSONAL PROJECTS
      a.project-link(v-for="links in sketch_links" v-link="links.link" target="_blank") {{links.site}}
</template>

<script>
  
  import unslider from 'jquery-unslider'
  import $ from 'jquery'

  export default {
    data () {
      return {
        imgpath: 'imgs/projects/',
        project: {},
        project_slides: [
          {
            project: "15x19"
          },{
            project: "zero-one"
          },{
            project: "xiv"
          },{
            project: "tif-sigfrids"
          },{
            project: "sls"
          },{
            project: "db13"
          }
        ],
        project_links: [
          {
            site: "Tif Sigfrids",
            link: "http://tifsigfrids.com/"
          },{
            site: "Kitchen Nation",
            link: "http://thekitchennation.com/"
          },{
            site: "Canon PRO",
            link: "http://canonpro1000.com/"
          },{
            site: "n/naka",
            link: "http://n-naka.com/"
          },{
            site: "zen sekizawa",
            link: "http://zensekizawa.com/"
          },{
            site: "Chris Cunningham Studio",
            link: "http://chriscunninghamstudio.com/"
          },{
            site: "HDR",
            link: "http://hdr.14-forty.com/"
          }
        ],
        sketch_links: [
          {
            site: "db13.us",
            link: "http://db13.us/"
          },{
            site: "15x19.io",
            link: "http://15x19.io/"
          },{
            site: "Loving Love",
            link: "http://lovinglove.biz/"
          },{
            site: "AN-AH-KAY",
            link: "http://an-ah-kay.com/"
          },{
            site: "SHASTA",
            link: "http://shasta.db13.us/"
          },{
            site: "Collapsing",
            link: "http://collapsing.db13.us/"
          },{
            site: "Sectional",
            link: "http://sectional.db13.us/"
          },{
            site: "Infinite",
            link: "http://infinite.db13.us/"
          }
        ]
      }
    },
    route: {
      canReuse: false,
        activate: function() {
          setTimeout(function(){
          document.getElementById('top-shell').style.opacity = 1;
          $('#work').unslider({
            nav: false,
            autoplay: true,
            arrows: false,
            animation: 'fade'
          });
        }, 250);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/vendor/unslider.sass"
  @import "../_sass/vendor/unslider-dots.sass"
  @import "../_sass/utilities/_utilities.sass"

  h1
    font-family: $pdu
    font-size: 4rem
    padding: 2rem
    border: 2px solid $white
    background-color: $black
    text-align: left
    color: $white

  #top-shell
    display: block
    width: 80vw
    min-height: 100vh
    float: right
    position: relative
    padding-bottom: 15rem
    a.project-link
      text-align: left
      display: block
      width: 100%
      color: $white
      -webkit-text-fill-color: white
      -webkit-text-stroke-width: 2px
      -webkit-text-stroke-color: black
      -webkit-font-smoothing: antialiased

  section
    @extend %clearfix
    min-height: 100vh
    width: 100vw

  #work
    @extend %full-screen
    position: fixed
    top: 0
    left: 0
    ul
      @extend %full-bg
      li
        @extend %full-bg
        @extend %full-screen

</style>