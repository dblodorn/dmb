<template lang="jade">
  section.single-project
    h1 {{project.project_name}}
    aside(v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '-portfolio-landing-desktop@2x.jpg)' }")
    article.project-description
      p.project-copy {{{project.project_copy}}}
      a.bottom-btn(v-for="link in project.links" v-link="link.site_link" target="_blank") {{link.link_copy}}
    ul.images(v-if="project.images")
      li(v-for="image in project.images")
        img(v-bind:src="imgpath + '/' + $route.params.slug + '/' + image.project_image" v-bind:alt="image.image_alt")
    a.bottom-btn(v-link="'/work'") MORE WORK
    a.bottom-btn(v-on:click="top") TOP
</template>

<script>
  export default {
    data () {
      return {
        project: {},
        imgpath: 'imgs/projects/'
      }
    },
    methods: {
      top: function (event) {
        $('body').animate({ scrollTop: 0 }, 175);
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        $('body').animate({ scrollTop: 0 }, 5);
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

  // RESPONSIVE
  html.mobile
    section.single-project
      padding-bottom: 8rem
      h1
        border-bottom: 2px solid $white
      article.project-description
        padding: 3rem 3rem 0
      aside
        height: 55vh
      ul.images
        padding: 0 2rem 2rem

  html.desktop
    section.single-project
      padding-bottom: 14rem
      h1
        position: fixed
        top: 0
        left: 0
      article.project-description
        padding: 4.5rem 1.5rem 3rem
      aside
        height: calc(100vh - 28rem)
      ul.images
        padding: 0 2rem 4rem

  // BASER
  section.single-project
    background-color: $white
    opacity: 0
    
    h1
      @extend %black-shadow
      width: 100vw
      background-color: $black
      z-index: 1500

    aside
      @extend %full-bg
      @extend %border-bottom
      width: 100vw
    
    article.project-description
      max-width: 70rem
      position: relative
      margin: auto
    
    a.project-link
      display: block
      margin: auto
      position: relative
      font-size: 4rem
      text-align: center
      padding: 1rem 0 2rem
      &:hover
        color: $black 

    ul.images
      @extend %aligner
      @extend %flex-row-wrap
      max-width: 160rem
      background-color: $white
      margin: auto
      position: relative
      li
        align-self: center
        max-width: 80rem
        padding: 1.5rem

</style>