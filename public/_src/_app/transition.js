import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
Vue.transition('home', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('opacity', 0)
      .delay(500).animate({ opacity: 1 }, 1250, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('opacity', 1)
      .delay(10).animate({ opacity: 0 }, 700, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

Vue.transition('home-nav', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('top', "-100vh")
      .delay(100).animate({ top: 0 }, 200, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('right', 0)
      .delay(10).animate({ right: "-100vw" }, 200, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})


// NAV
Vue.transition('nav', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('top', "-20rem")
      .delay(10).animate({ top: 0 }, 150, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('top', 0)
      .delay(10).animate({ top: "-20rem" }, 150, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

// PROJECT NAV
Vue.transition('project-nav', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('top', "100%")
      .delay(10).animate({ top: 0 }, 200, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('top', 0, 'opacity', 1)
      .delay(10).animate({ top: "100%", opacity: 0 }, 250, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

Vue.transition('project-description', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('left', "100vw")
      .delay(200).animate({ left: 0 }, 150, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('left', 0)
      .delay(10).animate({ left: "100vw" }, 250, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})
