import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
Vue.transition('home', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 0, done)
    document.querySelector('body').className = "home";
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('opacity', 1)
      .animate({ opacity: 0 }, 0, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

// Project
Vue.transition('project', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 0, done)
    document.querySelector('body').className = "project";
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('opacity', 1)
      .animate({ opacity: 0 }, 0, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})