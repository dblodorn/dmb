<template lang="jade">
  section#work(v-bind:style="{ backgroundImage: 'url(' + imgpath + img + '/' + img + '-cover@2x.jpg)' }" transition="project")
</template>

<script>
  export default {
    data () {
      return {
        imgpath: 'imgs/projects/',
        img: '15x19'
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  section#work
    @extend %full-bg
    @extend %aligner
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0

</style>