<template lang="jade">
  main.project(v-bind:id="$route.params.slug" transition="home")
    h1 {{project.project_name}}
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
        console.log(id)
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
  main.project
    padding-top: 10rem
    background-color: #000
</style>