<template lang="jade">
  #category-nav(transition="nav")
    menu.filter-options
      button(v-for="group in projects.project_categories" v-bind:data-group='group') {{group}}
  nav.project-menu(transition="project-nav")
    ul.js-shuffle
      project-desktop
</template>

<script>
  import $ from 'jquery'
  import ssm from 'simplestatemanager'
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
  
</style>
