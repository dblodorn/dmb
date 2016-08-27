<template lang="jade">
  section.single-project
    h1 {{project.project_name}}
    aside(v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '-portfolio-landing-desktop@2x.jpg)' }")
    article.project-description
      p.project-copy {{{project.project_copy}}}
        a(v-for="link in project.links" v-link="link.site_link" target="_blank") {{link.link_copy}}
    ul.images(v-if="project.images")
      li(v-for="image in project.images")
        img(v-bind:src="imgpath + '/' + $route.params.slug + '/' + image.project_image" v-bind:alt="image.image_alt")
    .btn.work
      a(v-link="'/work'") WORK
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
        var id = this.$route.params.slug
        this.$http.get('/data/' + id + '.json').then (
        function (data) {
          this.$set('project', data.json());
        },
        function (data) {
          alert('Failed to load data');
        }); 
        setTimeout(function(){
          $('.single-project').addClass('fade-in-slow')
        }, 150);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  section.single-project
    background-color: $white
    padding-bottom: 8rem
    opacity: 0
    
    h1
      width: 100vw
      background-color: $black
      position: fixed
      top: 0
      left: 0
      z-index: 1500

    aside
      @extend %full-bg
      @extend %border-bottom
      width: 100vw
      height: calc(100vh - 20rem)
    
    article.project-description
      padding: 6rem 2rem 2rem
      max-width: 74rem
      position: relative
      margin: auto
      a
        font-size: 4rem
        margin-top: 3rem
        text-align: center
        &:hover
          color: $black 

    ul.images
      @extend %aligner
      @extend %flex-row-wrap
      max-width: 150rem
      background-color: $white
      margin: auto
      position: relative
      padding-bottom: 6rem
      li
        align-self: center
        max-width: 70rem
        padding: 1rem

    .btn.work
      position: fixed
      bottom: 2rem
      left: 0
      right: 0
      margin: auto
      z-index: 13000
      width: 9rem

</style>