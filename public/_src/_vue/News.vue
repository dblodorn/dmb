<template lang="jade">
  section#about
    .about-content
      .about-copy(v-for="article in news.articles")
        h1 {{article.date}}
        h2 {{article.title}}
        p {{{article.copy}}}
</template>

<script>
  export default {
    data () {
      return {
        news: {}
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        var data = this.$route.data;
        this.$set('news', data);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

</style>