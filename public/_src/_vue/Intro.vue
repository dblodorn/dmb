<template lang="jade">
  #top-shell
    a.letter-breaker(v-link="'/work'") WORK
    a.letter-breaker(v-link="'/about'") ABOUT
</template>

<script>
  export default {
    route: {
      canReuse: false,
        activate: function() {
        setTimeout(function(){
          $('.letter-breaker').each(function() {
            var $this = $(this);
            $this.html($this.text().replace(/(\w)/g, "<span>$&</span>"));
          });
          document.getElementById('top-shell').style.opacity = 1;
        }, 250);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  #top-shell
    @extend %container-padding
    @extend %smooth
    display: flex
    align-items: flex-end
    justify-content: center
    flex-direction: column
    position: fixed
    z-index: 100
    height: calc(100vh - 8rem)
    width: 100vw
    top: 0
    opacity: 0
    overflow-y: scroll

  a
    font-family: $pdu
    text-transform: uppercase
    color: $black
    font-size: 14vw
    &:hover
      text-decoration: line-through

  .letter-breaker
    -webkit-text-stroke-width: 2px
    -webkit-text-stroke-color: black
    -webkit-font-smoothing: antialiased
    span:nth-child(1n)
      color: red

    span:nth-child(2n)
      color: blue

    span:nth-child(3n)
      color: yellow
      
    span:nth-child(4n)
      color: green

</style>