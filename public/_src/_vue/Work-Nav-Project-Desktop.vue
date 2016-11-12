<template lang="jade">
  #category-nav(transition="nav")
    menu.filter-options
      button(v-for="group in projects.project_categories" v-bind:data-group='group') {{group}}
  nav.project-menu(transition="project-nav")
    ul.js-shuffle
      li.project-thumb(v-for="item in projects.project_list" v-bind:data-groups="item.category + ',all'")
        .project-inner
          h2 {{item.project}}
          .project-description(v-bind:style="{backgroundImage: 'url(' + 'imgs/projects/' + item.link + '/' + item.link + '-hover.jpg' + ')' }")
            .content
              i
                h3 {{item.project}}
              i
                p {{item.summary}}
              i
                a(v-link="'work/' + item.link") View Project
</template>

<script>
  import workData from '../_data/work.json'
  import shuffleInit from '../_app/shuffle-init'
  export default {
    data () {
      return {
        projects: {}
      }
    },
    ready: function(){
      var data = workData;
      this.$set('projects', data);
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
    position: relative
    width: 100%
    padding: 2rem
    border: 1px solid $black
    background-color: $white
    &:hover
      h2
        opacity: 0!important
      .project-description
        opacity: 1
    
  .project-description
    @extend %smooth
    @extend %full-bg
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    display: flex
    padding: 0 4rem
    align-items: center
    opacity: 0
    .content
      display: flex
      flex-direction: column
      i
        width: 100%
      h3,p,a
        background-color: $blue
        display: inline
        color: $white
        float: left
        padding-left: .5rem
        padding-right: .5rem
      p
        padding-bottom: .5rem
      a
        cursor: pointer
        font-family: $monospace
        font-size: 1.45rem
        text-decoration: underline
        padding-bottom: .5rem
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