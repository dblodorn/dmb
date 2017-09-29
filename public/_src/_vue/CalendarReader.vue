<template lang="jade">
  ul.calendar(v-for="item in calendar.VCALENDAR") {{item.CALSCALE}}
    li(v-for="calitem in item.VEVENT") {{calitem.SUMMARY}} <br> {{calitem.DTSTAMP}}
</template>

<script>
  
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        calendar: [],
        imgpath: 'imgs/projects/'
      }
    },
    methods: {
      top: function (event) {
        $('body').animate({ scrollTop: 0 }, 175);
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        var id = this.$route.params.slug
        this.$http.get('/data/dl.json').then (
        function (data) {
          this.$set('calendar', data.json());
        },
        function (data) {
          alert('Failed to load data');
        });

      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  #dbk
    display: none!important

  #gl-bg,
  #gl-bg2
    display: none!important

  ul.calendar
    padding: 10%
    display: flex
    flex-direction: column-reverse
    li
      padding-bottom: 3rem
      font-family: monospace

</style>