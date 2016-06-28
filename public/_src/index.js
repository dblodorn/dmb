import './_sass/main.sass'

import $ from 'jquery'
import states from './_app/states.js'
import transition from './_app/transition.js'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Shell from './_vue/Shell.vue'
import Home from './_vue/Home.vue'
import Project from './_vue/Project.vue'

// VUE

Vue.use(VueRouter)

var App = Vue.extend()
var router = new VueRouter()

router.map({
  '/': {
    component: Shell,
    subRoutes: {
      '/': {
        component: Home
      },
      '/project': {
        component: Project
      }
    }
  }
})

router.start(App, 'body')

// NON VUE

var initApp = function() {
  states.init()
}

// RUN NOV VUE JS GLOBULAR FUNCTIONS
document.addEventListener('DOMContentLoaded', initApp);