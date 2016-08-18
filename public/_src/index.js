import './_sass/main.sass'

import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'

// Functions
import transition from './_app/transition.js'
import states from './_app/states.js'

// Templates
import shell from './_vue/Shell.vue'
import intro from './_vue/Intro.vue'
import work from './_vue/Work.vue'

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

router.map({
  '/': {
    component: shell,
    subRoutes: {
      '/': {
        component: intro
      },
      '/work': {
        component: work
      }
    }
  }
})

// Router
/*
router.map({
  '/': {
    component: shell,
    shellData: pageData.shell,
    subRoutes: {
      '/': {
        component: home,
        data: pageData.navigation
      },
      '/:slug': {
        component: project
      },
      '/about': {
        component: about,
        data: pageData.about
      }
    }
  }
})
*/

router.start(App, 'body')

// NON VUE

var initApp = function() {
  setTimeout(function(){
    document.getElementById('DBK').style.opacity = 1;
  }, 200);
}

document.addEventListener('DOMContentLoaded', initApp);