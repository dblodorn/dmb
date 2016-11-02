<template lang="jade">
  h1 {{project.project_name}}
  aside(v-bind:class="{asidescroll: project.images}" v-if="$mq.resize && $mq.below(width, 800)" v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '@0.5x.jpg)' }" transition="home")
  aside(v-bind:class="{asidescroll: project.images}" v-if="$mq.resize && $mq.between(width, [800,1919])" v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '.jpg)' }" transition="home")
  aside(v-bind:class="{asidescroll: project.images}" v-if="$mq.resize && $mq.above(width, 1920)" v-bind:style="{ backgroundImage: 'url(' + imgpath + $route.params.slug + '/' + $route.params.slug + '@2x.jpg)' }" transition="home")
  section.single-project(v-bind:class="{sectionscroll: project.images}")
    article.project-description
      p.project-copy {{{project.project_copy}}}
      .bottom-buttons
        a.btn(v-for="link in project.links" v-link="link.site_link" target="_blank") {{link.link_description}}
        a.btn(v-link="'/work'") ALL WORK
    ul.images(v-if="project.images")
      li(v-for="image in project.images")
        img(v-bind:src="imgpath + '/' + $route.params.slug + '/' + image.project_image" v-bind:alt="image.image_alt")
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
        $('#dbk').addClass('fade-out');
        
        var id = this.$route.params.slug
        this.$http.get('/data/work/' + id + '.json').then (
        function (data) {
          this.$set('project', data.json());
        },
        function (data) {
          alert('Failed to load data');
        });
        /*
        setTimeout(function(){
          var wh = window.innerHeight;
          if($('.single-project').hasClass('sectionscroll')){
            var descriptionHeight = $('.project-description').innerHeight() + 10;
            $('section.single-project').css('margin-top', 'calc(100vh - ' + descriptionHeight + 'px)');
          }
        }, 50);
        */
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  html.mobile
    aside
      position: relative
      width: 100vw
      height: 125vw
      border-bottom: 2px solid $black
    section.single-project
      position: relative
      padding-bottom: 0
      article.project-description
        padding: 3rem
      aside
        height: 55vh
      ul.images
        padding: 0 2rem 2rem
    .bottom-buttons
      flex-direction: column
      .btn
        margin-bottom: 2rem
        width: 100%
        margin-right: 0
        max-width: initial
        justify-content: center

  html.desktop
    aside
      position: fixed
      width: 100vw
      height: 100vh
    h1
      top: 0
      left: 0
    section.single-project
      position: fixed
      height: 100vh
      padding: 3rem
      article.project-description
        @extend %black-shadow
        max-width: 60rem
        margin-left: auto
        background-color: $white
        border: 2px solid $black
      .bottom-buttons
        flex-direction: row
    
    .asidescroll
      //position: relative!important
      height: calc(100vh - 20rem)!important
    
    .sectionscroll
      position: relative!important
      height: initial!important
      padding: .5rem!important
      flex-wrap: wrap
      border-top: 2px solid $black
      margin-top: calc(100vh - 22rem)
      background-color: $white
      article
        align-self: flex-start!important
        width: 100vw!important
        border: 0!important
        box-shadow: none!important

  aside
    @extend %full-bg
    position: absolute
    top: 0
    left: 0
    z-index: 0

  h1
    @extend %black-shadow
    color: $blue
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
    .btn
      margin-right: 2rem
      font-size: 1.25rem
      border: 1px solid $black
      line-height: 1.125

  section.single-project
    display: flex
    z-index: $content-z
    width: 100vw
    article
      align-self: flex-end
      padding: 2rem
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
    display: flex
    position: relative
    width: 100vw
    background-color: $white
    padding: 0
    z-index: 9000
    flex-wrap: wrap
    li
      padding: .5rem
      width: 50%
      align-self: flex-end
    li:nth-child(4n)
      align-self: flex-start 

</style>