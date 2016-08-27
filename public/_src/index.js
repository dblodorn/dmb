import './_sass/main.sass'

import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Functions
import states from './_app/states.js'

// Templates
import shell from './_vue/Shell.vue'
import home from './_vue/Home.vue'
import work from './_vue/Work.vue'
import about from './_vue/About.vue'
import news from './_vue/News.vue'
import project from './_vue/Project.vue'

// Data
import workData from './_data/work.json'
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
    subRoutes: {
      '/': {
        component: home
      },
      '/work': {
        component: work,
        data: workData
      },
      '/:slug': {
        component: project
      },
      '/about': {
        component: about,
        data: aboutData
      },
      '/news': {
        component: news,
        data: newsData
      },
    }
  }
})

var initApp = function() {
  router.start(App, 'body')
  setTimeout(function(){
    $('#dbk , .secondary-nav , .secondary-nav-bg , main').addClass('fade-in-slow');
  }, 250);
  states.init();
}

document.addEventListener('DOMContentLoaded', initApp);
