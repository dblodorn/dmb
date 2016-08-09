<template lang="jade">
  main#landing-page(transition="home")
    a(v-for="item in page.projects" v-link="item") 
      h1 {{item}}
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
        console.log(data)
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>
</style>