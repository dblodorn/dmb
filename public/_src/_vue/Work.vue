<template lang="jade">
  section#work-links
    #workslides
      ul
        li(v-for="slide in project_slides" v-bind:style="{ backgroundImage: 'url(' + imgpath + slide.project + '/' + slide.project + '-cover@2x.jpg)' }")
    #top-shell
      h1 CLIENT
      a.project-link(v-for="links in project_links" v-link="links.link" v-bind:target="links.target") {{links.site}}
      h1 PROJECTS
      a.project-link(v-for="links in sketch_links" v-link="links.link" v-bind:target="links.target") {{links.site}}
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
            target: "",
            link: "tif-sigfrids"
          },{
            site: "SLS",
            target: "",
            link: "sls"
          },{
            site: "xiv",
            target: "",
            link: "xiv"
          },{
            site: "n/naka",
            target: "_blank",
            link: "http://n-naka.com/"
          },{
            site: "zen sekizawa",
            target: "_blank",
            link: "http://zensekizawa.com/"
          },{
            site: "Kitchen Nation",
            target: "_blank",
            link: "http://thekitchennation.com/"
          },{
            site: "HDR",
            target: "_blank",
            link: "http://hdr.14-forty.com/"
          },{
            site: "Canon PRO",
            target: "_blank",
            link: "http://canonpro1000.com/"
          }
        ],
        sketch_links: [
          {
            site: "db13.us",
            target: "",
            link: "db13"
          },{
            site: "15x19.io",
            target: "",
            link: "15x19"
          },{
            site: "Loving Love",
            target: "_blank",
            link: "http://lovinglove.biz/"
          },{
            site: "AN-AH-KAY",
            target: "_blank",
            link: "http://an-ah-kay.com/"
          },{
            site: "SHASTA",
            target: "_blank",
            link: "http://shasta.db13.us/"
          },{
            site: "Collapsing",
            target: "_blank",
            link: "http://collapsing.db13.us/"
          },{
            site: "Sectional",
            target: "_blank",
            link: "http://sectional.db13.us/"
          },{
            site: "Infinite",
            target: "_blank",
            link: "http://infinite.db13.us/"
          }
        ]
      }
    },
    route: {
      canReuse: false,
        activate: function() {
          setTimeout(function(){
          $('#workslides').unslider({
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
    font-size: 3.5rem
    letter-spacing: 3px
    padding: 2rem
    border: 2px solid $white
    background-color: $black
    text-align: left
    color: $white
  
  section#work-links
    @extend %clearfix
    min-height: 100vh
    width: 100vw
    #top-shell
      opacity: 1
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

  #workslides
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