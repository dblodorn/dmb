<template lang="jade">
  #category-nav
    menu.filter-options
      button(data-group='all') All Projects
      button(data-group="web-development") Web-Development
      button(data-group="design") Design
      button(data-group="art") Art
      button(data-group="experimental") Experimental
  nav.project-menu.js-shuffle
    .project-item(v-for="item in projects.project_list" v-bind:data-groups="'[' + item.category + ']'")
      a.project-link(v-link="item.link") {{item.project}}
  aside#workslides
    ul
      li(v-for="slide in projects.project_slides" v-bind:style="{ backgroundImage: 'url('+ slide +')' }")
</template>

<script>
  import unslider from 'jquery-unslider'
  import $ from 'jquery'
  import utility from "../_app/utilities.js"
  import shuffleInit from '../_app/shuffle-init'

  export default {
    data () {
      return {
        projects: {}
      }
    },
    route: {
      canReuse: false,
        activate: function() {
        $('body').animate({ scrollTop: 0 }, 5);
        utility.setId('body','work')
        var data = this.$route.data;
        this.$set('projects', data);
      }
    },
    ready: function(){
      shuffleInit.filter();
      setTimeout(function(){
        $('#workslides').unslider({
          nav: false,
          autoplay: true,
          arrows: false,
          animation: 'fade'
        });
      }, 1000);
      setTimeout(function(){
        $('.project-menu').animate({opacity: 1}, 500);
      }, 500);
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/vendor/unslider.sass"
  @import "../_sass/vendor/unslider-dots.sass"
  @import "../_sass/utilities/_utilities.sass"

  // CATEGORY NAVIGATION
  #category-nav
    @extend %nav-shell
    padding: 2rem!important
    min-height: initial!important
    z-index: 1000
    menu
      background-color: $black
      border: 2px solid $white
      padding: 1rem
      width: 100%
      a
        color: $white
        font-size: 3rem
        margin-right: 3rem
  html.desktop
    nav.project-menu
      h2
        font-size: 4.25rem

  // PROJECT MENU
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

  // SLIDESHOW
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