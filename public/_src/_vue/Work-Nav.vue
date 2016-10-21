<template lang="jade">
  #category-nav(transition="nav")
    menu.filter-options
      button(data-group='all') All Projects
      button(data-group="web-development") Web-Development
      button(data-group="design") Design
      button(data-group="art") Art
      button(data-group="experimental") Experimental
  nav.project-menu(transition="project-nav")
    ul.js-shuffle
      li.project-thumb(v-for="item in projects.project_list" v-bind:data-groups="item.category + ',all'")
        .project-inner
          h2 {{item.project}}
          .project-description
            .content
              h3 {{item.project}}
              p {{item.summary}}
              a(v-link="item.link") View Project
</template>

<script>
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
    position: absolute
    top: 0
    width: 85vw
    right: 0
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
      padding: 2rem
      z-index: $nav-z

    .project-inner
      padding: 2rem
      border: 1px solid $black
      position: relative
      &:hover
        h2
          opacity: 0!important
        .project-description
          opacity: 1
      .project-description
        @extend %smooth
        position: absolute
        top: 0
        left: 0
        height: 100%
        display: flex
        background-color: $blue
        padding: 0 4rem
        align-items: center
        opacity: 0
        p
          padding-bottom: .5rem
        a
          font-family: $monospace
          font-size: 1.45rem
          text-decoration: underline
          color: $white
          &:hover 
            text-decoration: line-through
      h2
        +stroke-type($white,$black,2px)
        @extend %smooth
        text-align: left
        font-size: 12vw!important
        margin-bottom: 0
        pointer-events: none

      
</style>
