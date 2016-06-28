<template lang="jade">
  section#landing-page
    h1 {{headline}}
</template>

<script>
  export default {
    data () {
      return {
        headline: "home"
      }
    }
  }
  // initial - load
  setTimeout(function() {
    $('#landing-page').addClass('fade-in-slow');
  }, 300);
</script>

<style lang="sass?indentedSyntax" scoped>
</style>