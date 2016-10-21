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
  
  import utility from "../_app/utilities.js"

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
        
        utility.setId('body','news')

        var data = this.$route.data;
        this.$set('news', data);
        setTimeout(function(){
          $('.copy-content').addClass('fade-in-slow')
        }, 500);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  body#news
    background-color: $white

  .news-copy
    margin-bottom: 8rem
    
    h2
      +stroke-type($white,$black,1px)
      font-size: 4rem
      margin-bottom: 2rem!important
    
    h3
      font-family: $pdu
      font-size: 4rem
      color: $black
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