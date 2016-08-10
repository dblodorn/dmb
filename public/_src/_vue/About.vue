<template lang="jade">
  section(transition="project")
    h1 About
</template>

<script>
  export default {
    data () {
      return {
        project: {}
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        var id = this.$route.params.slug;
        this.$http.get('/data/' + id + '.json').then (
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

</style>