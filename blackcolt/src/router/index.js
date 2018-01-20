import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//head头部组件注册
// Vue.component('cl-head',head)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/Login'
    },
    {
      path:'/readMe',
      component:resolve => require(['../components/common/Home.vue'],resolve),
      children:[
        {
          path:'/',
          component:resolve => require(['../components/page/readMe.vue'],resolve)
        },
        {
          path:'/userCtrl',
          component:resolve => require(['../components/page/userCtrl.vue'],resolve)
        },
        {
          path:'/checkDay',
          component:resolve => require(['../components/page/checkDay.vue'],resolve)
        },
        {
          path:'/onBusiness',
          component:resolve => require(['../components/page/onBusiness.vue'],resolve)
        },
        {
          path:'/carCtrl',
          component:resolve => require(['../components/page/carCtrl.vue'],resolve)
        },
        {
          path:'/overTime',
          component:resolve => require(['../components/page/overTime.vue'],resolve)
        },
        {
          path:'/borrowM',
          component:resolve => require(['../components/page/borrowM.vue'],resolve)
        },
        {
          path:'/roleM',
          component:resolve => require(['../components/page/roleM.vue'],resolve)
        },
        {
          path:'/functionM',
          component:resolve => require(['../components/page/functionM.vue'],resolve)
        },
        {
          path:'/chooseM',
          component:resolve => require(['../components/page/chooseM.vue'],resolve)
        },
        {
          path:'/groupC',
          component:resolve => require(['../components/page/groupC.vue'],resolve)
        },
        {
          path:'/noticeC',
          component:resolve => require(['../components/page/noticeC.vue'],resolve)
        },
        {
          path:'/projectC',
          component:resolve => require(['../components/page/projectC.vue'],resolve)
        }

      ]
        
    },
    {
      path: '/Login',
     component:resolve => require(['../components/page/Login.vue'],resolve)
    }
  ]
})
