import './_sass/main.sass'

// Vendor
import $ from 'jquery'
import series from 'async-series'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vMediaQuery from 'v-media-query'

// Functions
import states from './_app/states.js'
import transition from './_app/transition.js'
import utility from "./_app/utilities.js"
import threeD from './_app/three-d.js'

// Templates
import shell from './_vue/Shell.vue'
import home from './_vue/Home.vue'
import about from './_vue/About.vue'
import news from './_vue/News.vue'
import project from './_vue/Project.vue'
import links from './_vue/Links.vue'
import WorkNav from './_vue/Work-Nav.vue'

// GLOBAL COMPONENTS
import ProjectDesktop from './_vue/Work-Nav-Project-Desktop.vue'
Vue.component('project-desktop', ProjectDesktop)

import ProjectMobile from './_vue/Work-Nav-Project-Mobile.vue'
Vue.component('project-mobile', ProjectMobile)

import ProjectHeader from './_vue/Project-Header.vue'
Vue.component('project-header', ProjectHeader)

// Data
import workData from './_data/work.json'
import newsData from './_data/news.json'
import aboutData from './_data/about.json'

// APP
Vue.use(vMediaQuery);
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

// ROUTES
router.map({
  '/': {
    component: shell,
    subRoutes: {
      '/': {
        component: home
      },
      '/work': {
        component: WorkNav,
        data: workData
      },
      '/work/:slug': {
        component: project
      },
      '/links/:slug': {
        component: links
      },
      '/about': {
        component: about,
        data: aboutData
      },
      '/news': {
        component: news,
        data: newsData
      }
    }
  }
});

// RUN CONFIG
var initApp = function() {
  series([
    function(done) {
      router.start(App, 'body')
      done()
    },
    function(done) {
      threeD.lines();
      done()
    },
    function(done) {
      setTimeout(function(){
        $('#dbk , .secondary-nav , .secondary-nav-bg , main').animate({opacity: 1}, 500);
      }, 250);
      done()
    },
    function(done) {
      states.init();
    }
    ], function(err) {
      console.log('Something be wrong!')
  });
}

document.addEventListener('DOMContentLoaded', initApp);
