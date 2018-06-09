<template>
    <div class="mainPart">
        <div class="top">
            <div class="left">
                北京电信通企业信息平台
            </div>
            <div class="right">
                {{time}}
            </div>
        </div>
        <div class="mainCont">
            <div class="mainsel">
                <div class="message">
                    <div class="portrait"></div>
                    <div class="account">
                        <span>您好,<br>{{msg}}</span>
                        <el-button @click="Cancellation" class="cancel" type="danger">注销</el-button>
                    </div>
                </div>
                <div class="selCont">
                    <el-tree
                        :data="this.$store.state.data"
                        :props="defaultProps"
                        accordion
                        @node-click="handleNodeClick"
                        :highlight-current="true">
                    </el-tree>
                </div>
            </div>
            <div class="mainRight">
                <div class="mainTitle">
                    <router-link v-for="(v,i) in navData" :key='i' :to="'/main/'+v.name" tag="span">
                        {{v.label}} x
                    </router-link>
                </div>
                <div class="mainLast">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            time: new Date().toLocaleString(), //时间
            msg:sessionStorage.getItem('msg'), //个人信息
            data:this.$store.state.data,
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            navData:[{label:'首页',name:'first'}]
        }
    },
    methods:{
        Cancellation(){  //注销按钮效果
            sessionStorage.setItem('msg','');
            sessionStorage.setItem('isLogin',false);
            this.$router.push('/login')
        },
        handleNodeClick(data,node,comp){ //点击侧边栏进入相应的路由
            if(data.children){
                if(node.expanded){
                    this.navData = data.children;
                }else{
                    this.navData = [{label:'首页',name:'first'}];
                }
            }else{
                this.$router.push(`/main/${data.name}`)
            }
            
        }
    },
    mounted(){
        setInterval(()=>{ //自动刷新时间
            this.time=new Date().toLocaleString()
        },1000)
        this.$store.dispatch('getData'); //获取数据
    }
}
</script>
<style src="./main.css">
    
</style>


