<template lang="jade">
  section(transition="project")
    h1 {{page.title}}
    p {{page.copy}}
</template>

<script>
  export default {
    data () {
      return {
        page: {}
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        var data = this.$route.data;
        this.$set('page', data);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

</style>