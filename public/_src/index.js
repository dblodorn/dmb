import './_sass/main.sass'

import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Functions
import states from './_app/states.js'
import transition from './_app/transition.js'
import utility from "./_app/utilities.js"

// Templates
import shell from './_vue/Shell.vue'
import home from './_vue/Home.vue'
import about from './_vue/About.vue'
import news from './_vue/News.vue'
import project from './_vue/Project.vue'
import links from './_vue/Links.vue'
import WorkNav from './_vue/Work-Nav.vue'
import WorkSubNav from './_vue/Work-Sub-Nav.vue'

// Data
import WebDevData from './_data/work-web-development.json'
import DesignData from './_data/work-design.json'
import ArtData from './_data/work-art.json'
import ExperimentalData from './_data/work-experimental.json'
import newsData from './_data/news.json'
import aboutData from './_data/about.json'

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
    data: workData,
    subRoutes: {
      '/': {
        component: home
      },
      '/work': {
        component: WorkNav
        subRoutes: {
        '/web-development': {
          component: WorkSubNav,
          data: WebDevData
          },
        '/design': {
          component: WorkSubNav,
          data: DesignData
          },
        '/art': {
          component: WorkSubNav,
          data: ArtData
          },
        '/experimental': {
          component: WorkSubNav,
          data: ExperimentalData
          }
        }
      },
      '/:slug': {
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

var initApp = function() {

  router.start(App, 'body')
  
  setTimeout(function(){
    $('#dbk , .secondary-nav , .secondary-nav-bg , main').animate({opacity: 1}, 500);
  }, 250);
  
  states.init();

  setTimeout(function(){
    utility.preload(workData.project_slides)
  }, 500);

}

document.addEventListener('DOMContentLoaded', initApp);
