<template lang="jade">
  header
    a(v-link="'/'")
      h1 {{title}}
  router-view
</template>

<script>
  export default {
    data () {
      return {
        title: "home"
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">
</style>