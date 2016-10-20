<template lang="jade">
  #category-nav
    menu.filter-options
      button(data-group='all') All Projects
      button(data-group="web-development") Web-Development
      button(data-group="design") Design
      button(data-group="art") Art
      button(data-group="experimental") Experimental
  nav.project-menu
    ul.js-shuffle
      li.project-thumb(v-for="item in projects.project_list" v-bind:data-groups="item.category + ',all'")
        a.project-link(v-link="item.link") {{item.project}}
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
      setTimeout(function(){
        $('.project-menu').animate({opacity: 1}, 1000);
      }, 500);
      setTimeout(function(){
        shuffleInit.filter();
      }, 50);
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  button
    @extend %button

  // CATEGORY NAVIGATION
  #category-nav
    @extend %nav-shell
    padding: 2rem!important
    min-height: initial!important
    position: fixed
    top: 0
    right: 0
    z-index: $header-z
    menu
      @extend %black-shadow
      background-color: $white
      border: 2px solid $black
      padding: 2rem
      width: 100%
      
  html.desktop
    nav.project-menu
      h2
        font-size: 4.25rem

  // PROJECT MENU
  nav.project-menu
    opacity: 0
    *
      color: $white
      width: 100%
    ul
      @extend %nav-shell
      flex-wrap: wrap
      margin-top: 14rem
    li
      position: relative
      display: flex
      width: 100%
      margin-bottom: 2rem
      padding-left: 3rem
      z-index: $nav-z

    a.project-link
      text-align: left
      -webkit-text-fill-color: white
      -webkit-text-stroke-width: 2px
      -webkit-text-stroke-color: black
      -webkit-font-smoothing: antialiased

</style>
