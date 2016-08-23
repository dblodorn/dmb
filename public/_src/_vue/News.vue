<template lang="jade">
  section#about
    .news-content
      .news-copy(v-for="article in news.articles")
        h1 {{article.date}}
        h2 {{article.title}}
        p {{{article.copy}}}
        img(v-bind:src="article.image")
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

  .news-copy
    margin-bottom: 8rem
    h1
      font-size: 4rem
      color: $black
      -webkit-text-fill-color: black
      -webkit-text-stroke-width: 1px
      -webkit-text-stroke-color: white
      -webkit-font-smoothing: antialiased
      margin-bottom: 2rem!important
    a
      text-transform: none
      letter-spacing: 0
  
  .news-copy:last-child
    margin-bottom: 0

</style>