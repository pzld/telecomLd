<template>
    <div class="account">
        <p>
            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-ruleForm">
            <el-form-item
                label="账号"
                prop="phone"
            >
                <el-input v-model="dynamicValidateForm.phone" auto-complete="off" placeholder="请输入手机号码或者邮箱"></el-input>
                <el-button type="primary" @click="phone()" style="height:30px;line-height:0px;padding:0 5px;" ref='phone' :disabled="flag">{{phoneCont}}</el-button>
                <el-button type="primary" @click="email()" style="height:30px;line-height:0px;padding:0 5px;">{{emailCont}}</el-button>
            </el-form-item>
            <div class="error">
                {{msg}}
            </div>
            <el-form-item>
                动态验证码
                <el-input v-model="dynamicValidateForm.pwd" auto-complete="off" ref="pwd" placeholder="请输入验证码"></el-input>
                <el-button type="primary" style="margin-left:70px;margin-top:10px" @click="login()">登录</el-button>
                <div class="error">
                    {{pwd}}
                </div>
            </el-form-item>
            
            </el-form>
        </p>
    </div>
</template>
<script>
import ElementUI from 'element-ui';
 export default {
    data() {
      return {
            dynamicValidateForm : {
              phone: '',
              pwd:''
            },
            msg:'',
            phoneCont:'手机号码验证',
            emailCont:'邮箱验证',
            min:5,
            flag : false,
            pwd:''
        }
    },
    methods: {
        phone(a){
            let reg = /^1[34578]\d{9}$/;
            if(!reg.test(this.dynamicValidateForm.phone)){ //验证手机号码格式
              this.msg = '请输入正确的手机号'
            }else{
              this.msg = '';
              alert(this.$store.state.test);//弹出验证码
              let new_value = '' ;
              if (this.dynamicValidateForm.phone > 7) { //加密手机号码
          　　　　new_value = this.dynamicValidateForm.phone.substr(0, 3) + '****' + this.dynamicValidateForm.phone.substr(7)
          　　}
              sessionStorage.setItem('msg',new_value) //将登陆的手机号码发送到本地内存
              sessionStorage.setItem('isLogin',1)  //确认登陆成功
              let timer = setInterval(()=>{ //定时器，重新发送
                  this.min--
                  this.phoneCont = this.min+'s后重新发送';
                  this.flag = true;
                  if(this.min == 0){
                    this.flag = false;
                    this.phoneCont ='手机号码验证';
                    clearInterval(timer);
                    this.min = 5;
                  }
                },1000)
            }
        },
        email(){
            let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if(!reg.test(this.dynamicValidateForm.phone)){//验证邮箱格式
                this.msg = '请输入正确的邮箱'
            }else{
                this.msg = ''
                alert(this.$store.state.test)
                if (String(this.dynamicValidateForm.phone).indexOf('@') > 0) { //加密邮箱
            　　　　var str = this.dynamicValidateForm.phone.split('@'),
            　　　　　　_s = '';
            　　　　if (str[0].length > 3) {
            　　　　　　for (var i = 0; i < str[0].length - 3; i++) {
            　　　　　　　　_s += '*';
            　　　　　　}
            　　　　}
            　　　　 let new_value = str[0].substr(0, 3) + _s + '@' + str[1]
                    sessionStorage.setItem('msg',new_value)  //将邮箱信息发送给本地内存
                    sessionStorage.setItem('isLogin',1)  //确认登陆成功
            　　}
            }
        },
      login(){
              if(this.$refs.pwd.value == this.$store.state.test){
                this.$router.push('/main')
                this.pwd = ''
              }else{
                this.pwd = '密码错误'
              }
          }
      }
  }
</script>
<style>
    .account{
      padding: 10px 20px;
      box-sizing: border-box;
    }
    .error{
      margin: 0;
      padding: 0;
      height: 20px;
      font-size: .14rem;
      color: red;
      margin-top: -10px;
    }
</style>


