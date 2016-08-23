<template lang="jade">
  section#about
    .about-content
      .about-copy {{{about}}}
      .about-links
        a(v-for="links in site_links" v-link="links.link" target="_blank") {{links.site}}
</template>

<script>
  export default {
    data () {
      return {
        about: "<p>I have an overarching interest in communication systems and the technologies and mediums that facilitate and inform them. My career has spanned across several disciplines but at its core is a passion for relaying information to other people, be it via an installation of non objective paintings, designing and hand coding a bespoke website, creating a custom back-end, or exploring the code behind the digital interfaces we are increasingly becoming inseperable from.</p><p>I view every layer of each project I participate in as part of a larger whole. Each one of those projects present a distinctive challenge in deciding what medium best suites it. My experience across many fields gives me a unique perspective and a large skill-set that can be applied to a broad variety of assignments. I hold a deep passion for web development and am constantly exploring new technologies and how they can facilitate notable interactive experiences. <a href='mailto:hello@dain.kim'>Email Me</a> for Full CV & Additional Work Samples.</p>",
        site_links: [
          {
            site: "LINKEDIN",
            link: "https://www.linkedin.com/in/dain-blodorn-028324b2"
          },{
            site: "GITHUB",
            link: "https://github.com/dblodorn"
          },{
            site: "CODEPEN",
            link: "http://codepen.io/mrdain/"
          },{
            site: "INSTAGRAM",
            link: "https://www.instagram.com/mrdainblo/"
          },{
            site: "TWITTER",
            link: "https://twitter.com/dblodorn"
          },{
            site: "SOUNDCLOUD",
            link: "https://soundcloud.com/dainblodorn"
          },{
            site: "TUMBLR",
            link: "http://db13.tumblr.com/"
          }
        ]
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        //document.querySelector('body').classList.add("footer-hidden")
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  section#about
    display: flex
    justify-content: center
    width: 100vw
    min-height: 100vh
    background-color: $black
    padding: 14rem 0 24rem

    a.close
      position: fixed
      top: 2rem
      right: 2rem
      z-index: 12000
      color: $black
      -webkit-text-fill-color: black
      -webkit-text-stroke-width: 2px
      -webkit-text-stroke-color: white
      -webkit-font-smoothing: antialiased

    .about-content,
    .news-content
      z-index: 1000
      max-width: 70rem
      border: 2px solid $white
      padding: 3vw
      position: relative
      h1
        margin-bottom: 6rem
      a
        font-size: 3.5rem
        letter-spacing: 3px
        margin-bottom: 2.5rem
      a:last-child
        margin-bottom: 0

      *
        color: $white!important
    
    .about-copy,
    .news-copy
      a
        font-family: $monospace
        font-size: 2rem
        line-height: 1.5
        display: inline
        text-decoration: underline
        &:hover
          text-decoration: line-through

    .about-links
      border-top: 1px solid $white
      padding-top: 3.5rem

</style>