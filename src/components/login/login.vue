<template>
    <div class="login">
        <div class="head">
            <p class="logo"><img src="../../img/logo1.jpg" alt=""></p>
            <p class="logo2"><img src="../../img/logo2.jpg" alt=""></p>
        </div>
        <div class="main">
            <div class="loginCont">
                <div class="title">
                    <router-link to="/login/qrcode" tag="span" class="active">二维码登录</router-link>
                    <router-link to="/login/account" tag="span">账号登录</router-link>
                </div>
                <div class="cont">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login'
}
</script>
<style scoped>
    .login{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .head{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        padding: 10px;
        box-sizing: border-box;
    }
    .logo{
        padding: 0 15px;
        border-right: 2px solid #ccc;
        box-sizing: border-box;
    }
    .logo2{
        margin-left: 10px;
    }
    .main{
        width: 100%;
        height: 440px;
        background: url(../../img/loginbg.jpg) center;
        background-size: 100% 100%;
        position: relative;
    }
    .main>.loginCont{
        position: absolute;
        right: 50px;
        top:50%;
        transform: translateY(-50%);
        width: 240px;
        height: 350px;
        background: #fff;
        border-radius: 5px;
    }
    .loginCont>.title{
        width: 100%;
        height: 40px;
        box-sizing: border-box;
    }
    .loginCont>.title span{
        display: inline-block;
        width: 49%;
        height: 100%;
        line-height: 40px;
        cursor: pointer;
        text-align: center;
        background: #ccc;
        font-size: 14px;
    }
    .loginCont>.title span.router-link-active{
        background: #fff;
    }
    .loginCont>.cont{
        width: 100%;
        height: 310px;
    }
</style>


