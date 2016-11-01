<template lang="jade">
  nav.project-menu(transition="quick-fade")
    ul
      li(v-for="item in projects.project_list")
        a(v-link="'work/' + item.link") {{item.project}}
        p {{item.summary}}
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
    right: 0
    width: 100vw
    a
      +stroke-type($white,$black,1px)
      width: 100%
    p
      color: $white
      padding-bottom: 0
      font-size: 1.25rem

  // RESPONSIVE
  ul
    @extend %nav-shell
    flex-wrap: wrap
    margin-top: 8.5rem
    li
      position: relative
      display: flex
      flex-wrap: wrap
      width: 100%
      padding: 1rem 2rem 2rem
      z-index: $nav-z
      margin-bottom: 2rem
      border: 1px solid $black
      background-color: $blue


</style>