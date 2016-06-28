<template lang="jade">
  header
    h1 {{title}}
  router-view
</template>

<script>
  export default {
    data () {
      return {
        title: 'SHELL'
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">
</style>