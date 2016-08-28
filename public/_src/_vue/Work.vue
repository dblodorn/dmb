<template lang="jade">
  nav.project-menu
    h2 CLIENT
    a.project-link(v-for="links in work.project_links" v-link="links.link" v-bind:target="links.target") {{links.site}}
    h2 PROJECTS
    a.project-link(v-for="links in work.sketch_links" v-link="links.link" v-bind:target="links.target") {{links.site}}
  aside#workslides
    ul
      li(v-for="slide in work.project_slides" v-bind:style="{ backgroundImage: 'url(' + imgpath + slide.project + '/' + slide.project + '-cover@2x.jpg)' }")
</template>

<script>
  
  import unslider from 'jquery-unslider'
  import $ from 'jquery'

  export default {
    data () {
      return {
        imgpath: 'imgs/projects/',
        work: {}
      }
    },
    route: {
      canReuse: false,
        activate: function() {
          
          $('body').animate({ scrollTop: 0 }, 5);

          var data = this.$route.data;
          this.$set('work', data);
          
          setTimeout(function(){
            $('.project-menu').addClass('fade-in-slow')
          }, 75);

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

  html.mobile
    nav.project-menu
      h2
        font-size: 3rem
        line-height: .4
      a.project-link
        padding-bottom: 1rem


  html.desktop
    nav.project-menu
      h2
        font-size: 4.25rem

  // BASE
  nav.project-menu
    @extend %nav-shell
    opacity: 0
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
    a.project-link
      text-align: left
      display: block
      width: 100%
      -webkit-text-fill-color: white
      -webkit-text-stroke-width: 2px
      -webkit-text-stroke-color: black
      -webkit-font-smoothing: antialiased

  aside#workslides
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