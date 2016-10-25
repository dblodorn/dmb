<template lang="jade">
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
  import workData from '../_data/work.json'
  export default {
    data () {
      return {
        projects: {}
      }
    },
    ready: function(){
      var data = workData;
      this.$set('projects', data);
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  ul
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
        width: 100%
        display: flex
        background-color: $blue
        padding: 0 4rem
        align-items: center
        opacity: 0
        p
          padding-bottom: .5rem
          color: $white
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