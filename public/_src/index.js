import './_sass/main.sass'

import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import transition from './_app/transition.js'
import states from './_app/states.js'

// Templates
import shell from './_vue/Shell.vue'
import project from './_vue/Project.vue'
import home from './_vue/Home.vue'

// DATA
import pageData from '../data/data.json'

// APP
Vue.use(VueRouter);

const App = Vue.extend()
window.router = new VueRouter({
  hashbang: false,
  history: true,
  mode: 'html5',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/'
});

// Router
router.map({
  '/': {
    component: shell,
    shellData: pageData,
    subRoutes: {
      '/': {
        component: home,
        data: pageData.navigation
      },
      '/:slug': {
        component: project
      }
    }
  }
})

router.afterEach(function (transition) {
  console.log('Successfully navigated to: ' + transition.to.path)
})

router.start(App, 'body')

// NON VUE

var initApp = function() {
  states.init()
}

// RUN NOV VUE JS GLOBULAR FUNCTIONS
document.addEventListener('DOMContentLoaded', initApp);