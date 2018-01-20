<template>
<div class="login-wrap">
    <div class="ms-title"><strong>BlackColt 玄驹后台管理系统</strong></div>
    <div class="ms-login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:rgba(255,255,255,0.6);">Tips : 用户名和密码必填。</p>
            </el-form>
  </el-form>

    </div>
</div>  
</template>
<script>
import axios from 'axios';
export default{
    data(){
    return{
        ruleForm:{
            username:'',
            password:''
        },
        rules:{
             username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '长度不少于6个字符', trigger: 'blur' }
          ]
        }
    }
    },
    methods: {
       
        submitForm(formName) {
             const self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            self.$router.push('/readMe')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
}
}
</script>

<style scoped>
.login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
.ms-title{
    position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;
}
.ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin: -160px 0 0 -150px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
}
.login-btn{
        text-align: center;
        margin-top: 50px;
}
.login-btn button{
        width:100%;
        height:36px;
}

</style>

