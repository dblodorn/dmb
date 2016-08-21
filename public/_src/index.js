import './_sass/main.sass'

import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Functions
//import transition from './_app/transition.js'
import states from './_app/states.js'

// Templates
import shell from './_vue/Shell.vue'
import intro from './_vue/Intro.vue'
import work from './_vue/Work.vue'
import project from './_vue/Project.vue'

import data from './_data/data.json'

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
      },
      '/:slug': {
        component: project
      }
    }
  }
})

// TITLE CHANGER

var changeTitle = function(){
  document.querySelector('title').innerHTML = "DAIN | M. BLODORN | KIM";
}

var initApp = function() {
  router.start(App, 'body')
  changeTitle()
  setTimeout(function(){
    document.getElementById('DBK').style.opacity = 1;
  }, 350);
}

document.addEventListener('DOMContentLoaded', initApp);