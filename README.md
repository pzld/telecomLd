# telecom项目总结

1. 这是电信通集团长城宽带的项目，主要是做人员管理方面的功能。

2. 该项目应用vue框架，引用vue-cli脚手架但是添加了一些自定义配置；并且结合vuex做数据管理，vue-router做路由管理，运用了elementUI框架以及一些自定义配置

3. 路由配置

        routes: [
            {
                path: '/',
                redirect: '/login',
            },{
                path: '/login',
                name: 'login',
                component: login,
                redirect: '/login/qrcode',
                children: [
                    {
                        path: '/login/qrcode',
                        name: 'qrcode',
                        component: qrcode
                    }, {
                        path: '/login/account',
                        name: 'account',
                        component: account
                    }
                ]
            },{
                path: '/main',
                name: 'main',
                component: main,
                redirect: '/main/first',
                children:[
                    {
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
                    }
                ]
            }
        ]
4. elementUI
    >实际用到el-From,el-Table,el-Tree,el-NavMeau,el-Popvoer
5. 登录权限
    >通过vue-router中的beforeEach

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
6. 遇到的问题

    * 在运用elementUI框架时，原生的组件与项目实际原型不符，通过进行一系列的自定义封装解决
