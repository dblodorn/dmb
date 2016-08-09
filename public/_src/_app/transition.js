import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
Vue.transition('home', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('opacity', 0)
      .delay(500).animate({ opacity: 1 }, 350, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('opacity', 1)
      .animate({ opacity: 0 }, 1500, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})