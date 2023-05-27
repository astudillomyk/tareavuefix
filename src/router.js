import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import QuotesListView from './views/QuotesListView.vue'

Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', component: HomeView },
        { path: '/quotes', component: QuotesListView }
      ]

})
