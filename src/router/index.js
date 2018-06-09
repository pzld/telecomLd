import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import qrcode from '@/components/login/qrcode';
import account from '@/components/login/account';
import main from '@/components/main/main';
import eanumber from '@/components/main/organization/eanumber';
import meau from '@/components/main/organization/meau';
import user from '@/components/main/organization/user';
import first from '@/components/main/first/first';
import myapply from '@/components/main/myjob/myapply';
import mynodo from '@/components/main/myjob/mynodo';
import mydid from '@/components/main/myjob/mydid';
import mymsg from '@/components/main/myjob/mymsg';



Vue.use(Router)
let router = new Router({
  routes: [{
        path: '/',
        redirect: '/login',
      },
      {
        path: '/login',
        name: 'login',
        component: login,
        redirect: '/login/qrcode',
        children: [{
          path: '/login/qrcode',
          name: 'qrcode',
          component: qrcode
        }, {
          path: '/login/account',
          name: 'account',
          component: account
        }]
      }, {
          path: '/main',
          name: 'main',
          component: main,
          redirect: '/main/first',
          children:[{
              path:'first',
              name:'first',
              component:first
          },{
              path: 'eanumber',
              name: 'eanumber',
              component:eanumber
          },{
              path: 'meau',
              name: 'meau',
              component: meau
          },{
              path: 'user',
              name: 'user',
              component: user
          },{
              path:'myapply',
              name:'myapply',
              component:myapply
          },{
              path: 'myapply',
              name: 'myapply',
              component: myapply
          },{
              path: 'mynodo',
              name: 'mynodo',
              component: mynodo
          },{
            path: 'mydid',
            name: 'mydid',
            component: mydid
          },{
            path: 'mymsg',
            name: 'mymsg',
            component: mymsg
          },{
            path:'customer',
            name:'customer'
          }, {
            path: 'business',
            name: 'business'
          }, {
            path: 'engine',
            name: 'engine'
          }, {
            path: 'charging',
            name: 'charging'
          },{
            path:'pam',
            name:'pam'
          }]
        }
    ]
})
router.beforeEach((to,from,next)=>{
  if(to.path == '/login/account' || to.path == '/login/qrcode'){
      next()
  }else{
      if(sessionStorage.getItem('isLogin') == true){
          next();
      }else{
        alert('请先登录')
          next('/login')
      }
  }
  
})
export default router

