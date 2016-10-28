<template lang="jade">
  nav.project-menu(transition="nav")
    ul
      li(v-for="item in projects.project_list")
        a(v-link="item.link") {{item.project}}
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

  nav.project-menu
    position: absolute
    top: 0
    width: 100vw
    right: 0
    *
      +stroke-type($white,$black,1px)
      width: 100%
    ul
      @extend %nav-shell
      flex-wrap: wrap
      margin-top: 8.5rem

  // RESPONSIVE
  ul
    li
      position: relative
      display: flex
      width: 100%
      padding: 1rem
      z-index: $nav-z
      margin-bottom: 2rem
      border: 1px solid $black

</style>