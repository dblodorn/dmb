<template lang="jade">
  section.prj-li(transition="home")
    nav
      a(v-for="item in page.projects" v-link="item" v-on:mouseover="setBg") {{item}}
  aside.dflt
  aside.prj(v-for="item in page.projects" v-bind:class="item" v-bind:style="{ backgroundImage: 'url(' + imgpath + item + '/' + item + '-cover@1x.jpg)' }")
</template>

<script>
  export default {
    data () {
      return {
        page: {},
        imgpath: 'imgs/projects/'
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        var data = this.$route.data;
        this.$set('page', data);
      }
    },
    methods: {
      setBg: function (event) {
        var hoveredEl = event.target,
            projectElement = 'aside.' + hoveredEl.innerHTML; 
        if(!$(projectElement).hasClass('active')) {
          $('aside').removeClass('active');
          $(projectElement).addClass('active');
        } else {
          $(projectElement).removeClass('active');
        }
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  main
    width: 50vw

  section.prj-li
    @extend %container-padding
    display: block
    width: 50vw
    position: relative
    a
      color: $black
      background-color: $white
      &:hover
        color: $white
        background-color: $black

  aside
    @extend %cover-no-repeat
    border-left: 10px solid $black
    height: 100vh
    width: 50vw
    position: fixed
    top: 0
    right: 0
    z-index: 10000
    background-color: $white

  aside.prj
    @extend %smooth-slow
    opacity: 0

  aside.prj.active
    opacity: 1

</style>