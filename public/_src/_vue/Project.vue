<template lang="jade">
  h1 {{project.project_name}}
  section.single-project
    article.project-description
      p.project-copy {{{project.project_copy}}}
      .bottom-buttons
        a.btn(v-for="link in project.links" v-link="link.site_link" target="_blank") {{link.link_copy}}
        a.btn(v-link="'/work'") ALL WORK
  ul.images(v-if="project.images")
    li(v-for="image in project.images")
      img(v-bind:src="imgpath + '/' + $route.params.slug + '/' + image.project_image" v-bind:alt="image.image_alt")
  aside(v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '-portfolio-landing-desktop@2x.jpg)' }" transition="home")
</template>

<script>
  
  import utility from "../_app/utilities.js"

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
        
        utility.setId('body','project')

        $('body').animate({ scrollTop: 0 }, 5);
        
        var id = this.$route.params.slug
        this.$http.get('/data/work/' + id + '.json').then (
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
      h1
        position: fixed
        top: 0
        left: 0
      ul.images
        padding: 0 2rem 4rem

  aside
    @extend %full-bg
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0
    z-index: 0

  h1
    @extend %black-shadow
    +stroke-type($white,$black,1px)
    width: 100vw
    background-color: $white
    z-index: 1500
    border-bottom: 2px solid $black
    padding: 1rem
    font-size: 4.5rem
    letter-spacing: 2px
    display: block
    position: fixed

  .bottom-buttons
    width: 100%
    display: flex
    flex-direction: row
    .btn
      margin-right: 2rem
      font-size: 1.25rem
      border: 1px solid $black
      line-height: 1.125

  section.single-project
    position: fixed
    top: 0
    z-index: $content-z
    height: 100vh
    width: 100vw
    display: flex
    align-items: flex-end
    padding: 3rem
  
    article.project-description
      @extend %black-shadow
      max-width: 60rem
      padding: 2rem
      margin-left: auto
      background-color: $white
      border: 2px solid $black
    
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
    position: absolute
    max-width: 50rem
    background-color: $white
    padding: 1rem 2rem
    border: 2px solid $black
    z-index: 9000
    margin: 10rem 3rem
    li
      align-self: center
      //max-width: 80rem
      padding: 1rem 0

</style>