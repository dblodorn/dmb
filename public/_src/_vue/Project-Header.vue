<template lang="jade">
  h1 {{headerproject.project_name}} {{$route.params.slug}}
</template>

<script>
  
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        headerproject: {}
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // RESPONSIVE
  html.desktop
    h1
      top: 0
      left: 0
   
  h1
    @extend %black-shadow
    color: $blue
    width: 100vw
    background-color: $white
    z-index: 1500
    border-bottom: $border
    padding: 1rem
    font-size: 4.5rem
    letter-spacing: 2px
    display: block
    position: fixed

</style>