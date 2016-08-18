<template lang="jade">
  section#lndg
    //.zero
      img(v-bind:src="'imgs/doodles/0.svg'")
</template>

<script>
  export default {
    data () {
      return {
        title: "INTRO",
        imgpath: "imgs/doodles/"
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  section#lndg
    display: flex
    align-items: center
    width: 100vw
    height: 100vh
    position: fixed
    z-index: 1
    justify-content: center

</style>