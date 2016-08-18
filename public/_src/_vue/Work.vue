<template lang="jade">
  section(transition="project")
    #work
      .slide(v-for="slide in project_slides" v-bind:style="{ backgroundImage: 'url(' + imgpath + slide.project + '/' + slide.project + '-cover@2x.jpg)' }")
    #top-shell
      a(v-for="links in project_links" v-link="links.link" target="_blank") {{links.site}}
</template>

<script>
  
  import slider from '../_app/slider.js'

  export default {
    data () {
      return {
        imgpath: 'imgs/projects/',
        project_slides: [
          {
            project: "15x19"
          }
        ],
        project_links: [
          {
            site: "Tif Sigfrids",
            link: "http://tifsigfrids.com/"
          },
          {
            site: "db13.us",
            link: "http://db13.us/"
          },
          {
            site: "15x19.io",
            link: "http://15x19.io/"
          },
          {
            site: "Kitchen Nation",
            link: "http://thekitchennation.com/"
          },
          {
            site: "n/naka",
            link: "http://n-naka.com/"
          },
          {
            site: "zen sekizawa",
            link: "http://zensekizawa.com/"
          },
          {
            site: "Chris Cunningham Studio",
            link: "http://chriscunninghamstudio.com/"
          },
          {
            site: "Loving Love",
            link: "http://lovinglove.biz/"
          }
        ]
      }
    }
  }

  setTimeout(function(){
    document.getElementById('top-shell').style.opacity = 1;
  }, 400);

</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  #top-shell
    justify-content: flex-start
    height: 100vh
    text-align: right
    a
      color: $white
      -webkit-text-fill-color: white
      -webkit-text-stroke-width: 2px
      -webkit-text-stroke-color: black
      -webkit-font-smoothing: antialiased

  section
    @extend %clearfix
    min-height: 100vh
    width: 100vw

  #work,
  .slide
    @extend %full-screen
    position: fixed
    top: 0
    left: 0
  .slide
    @extend %full-bg

</style>