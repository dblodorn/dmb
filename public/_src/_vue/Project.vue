<template lang="jade">
  section.single-project(transition="project")
    h1 {{project.project_name}}
    aside(v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '-portfolio-landing-desktop@1x.jpg)' }")
    article.project-description
      p {{project.project_copy}}
      ul
        li(v-for="catgegory in project.categories")
          p {{catgegory}}
      a(v-for="link in project.links" v-link="link.site_link" target="_blank") {{link.link_copy}}
</template>

<script>
  export default {
    data () {
      return {
        project: {},
        imgpath: 'imgs/projects/'
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        var id = this.$route.params.slug;
        this.$http.get('/data/' + id + '.json').then (
        function (data) {
          this.$set('project', data.json());
        },
        function (data) {
          alert('Failed to load data');
        }); 
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  main
    width: 100vw

  section
    h1
      width: 100vw
      background-color: $black

    aside
      @extend %full-bg
      @extend %border-bottom
      width: 100vw
      height: calc(100vh + 10rem)
    
    article.image-grid
      @extend %border-bottom
      max-width: 100vw
      padding: 0

    article.project-description
      @extend %container-padding
      max-width: 74rem
      
      a
        margin-top: 3rem
        &:hover
          color: $black
      
      ul
        margin-top: 3rem
        li
          font-family: $monospace
          display: inline
          text-transform: uppercase

</style>