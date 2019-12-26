import Vue from 'vue'
import Router from 'vue-router'
import QuestionaireItem from '@/components/questionaire/QuestionaireItem'

Vue.use(Router)

const routes = [{
  path: '/item/:id',
  component: QuestionaireItem
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
