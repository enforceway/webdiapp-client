import Vue from 'vue'
import Router from 'vue-router'
import QuestionaireItem from '@/components/questionaire/QuestionaireItem'
import Graph from '@/components/mxgraph/graph'

Vue.use(Router)

const routes = [{
  path: '/item/:id',
  component: QuestionaireItem
}, {
  path: '/graph',
  component: Graph
}]

export default () => {
  let nRouter = new Router({
    routes,
    mode: 'hash'
    // base: '/base/',
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link'
  })
  nRouter.beforeEach(function (to, from, next) {
    next()
  })
  return nRouter
}
