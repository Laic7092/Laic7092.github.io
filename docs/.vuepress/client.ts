import { defineClientConfig } from '@vuepress/client'
import { provide, ref } from 'vue'
import postList from './components/post-list.vue'


export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // console.log(app, 'app');
    // console.log(router, 'router');
    // console.log(router.getRoutes(), 'routes');
    // console.log(siteData, 'siteData');
    // console.log(foo);
    // console.log('malou',malou);
    app.component('postList', postList)
    app.provide('router', router)
  },
  setup() {
    provide('count', 5)
  },
  layouts: {},
  rootComponents: [],
})
