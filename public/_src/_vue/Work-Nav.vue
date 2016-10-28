<template lang="jade">
  project-desktop(v-if="$mq.resize && $mq.above('1024px')")
  project-mobile(v-if="$mq.resize && $mq.below('1024px')")
</template>

<script>
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    route: {
      canReuse: false,
      activate: function() {
        $('body').animate({ scrollTop: 0 }, 5);
        utility.setId('body','work')
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"
  
</style>
