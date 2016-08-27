<template lang="jade">
  section#content
    article.copy-content
      .copy.news-copy(v-for="article in news.articles")
        h2 {{article.date}}
        h3 {{article.title}}
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
        $('body').animate({ scrollTop: 0 }, 5);
        var data = this.$route.data;
        this.$set('news', data);
        setTimeout(function(){
          $('.copy-content').addClass('fade-in-slow')
        }, 150);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  .news-copy
    margin-bottom: 8rem
    
    h2
      font-size: 4rem
      color: $black
      -webkit-text-fill-color: black
      -webkit-text-stroke-width: 1px
      -webkit-text-stroke-color: white
      -webkit-font-smoothing: antialiased
      margin-bottom: 2rem!important
    
    h3
      font-family: $pdu
      font-size: 4rem
      color: $white
      text-transform: uppercase
      margin-bottom: 2rem
      width: 100%
      text-align: center

    a
      text-transform: none
      letter-spacing: 0
    img
      padding: 4px
      background-color: $dk-grey
  
  .news-copy:last-child
    margin-bottom: 0

</style>