<template>
    <div class="qrcode">
        <h4>手机扫码 安全防盗</h4>
        <p>
            <img src="../../img/loginewm.jpg" alt="">
        </p>
        <div>请使用APP扫描二维码登录</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .qrcode{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .qrcode>p{
        width:100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-80%,0)
    }
    .qrcode>p>img{
        width: 100%;
        height: 100%;
    }
    .qrcode>div{
        font-size: 12px;
        background: skyblue;
        position: absolute;
        bottom: 50px;
        left: 40%;
        transform: translateX(-35%)
    }
    .qrcode>h4{
        width: 100%;
        text-align: center;
        margin-top: 20px;
        box-sizing: border-box;
    }
</style>


