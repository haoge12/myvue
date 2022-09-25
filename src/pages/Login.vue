<template>
  <div>
    <h1>登录页</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-position="center"
      class="demo-ruleForm">
      <el-form-item label="用户名" prop="uname">
        <el-input v-model="ruleForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass"></el-input>
      </el-form-item>
<!--      <el-form-item label="你的邮箱" prop="mailbox">-->
<!--        <el-input v-model="ruleForm.mailbox"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="resetForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var checkName = (rule, value, cb) => {
        //验证名字的正则表达式
        const regName = /^([\\u4e00-\\u9fa5]{1,20}|[a-zA-Z\\.\\s]{1,20})$/;
        if (regName.test(value)) {
          //正确的名字
          return cb();
        }
        cb(new Error("请输入正确的名字"));
      };
      var checkMobile = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("手机号不可为空"));
        } else {
          if (value !== "") {
            var reg = /^1[3-9]\d{9}$/;
            if (!reg.test(value)) {
              callback(new Error("请输入有效的手机号码"));
            }
          }
          callback();
        }
      };
      var checkEmail = (rule, value, cb) => {
        //验证邮箱的正则表达式
        const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (regEmail.test(value)) {
          //合法的邮箱
          return cb();
        }
        cb(new Error("请输入合法的邮箱"));
      };
      return {
        ruleForm: {
          name: '',
          password: '',
        },
        rules: {
          uname: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            // {
            //   validator: checkName,
            //   min: 2,
            //   max: 5,
            //   message: "请输入正确的名字",
            //   trigger: "blur",
            // },
          ],
          pass: [
            { required: true, message: "请输入密码", trigger: "blur" },
            // {
            //   validator: checkMobile,
            //   min: 11,
            //   max: 11,
            //   message: "手机号格式错误",
            //   trigger: "blur",
            // },
          ],
          // mailbox: [
          //   { required: true, message: "请输入你的邮箱", trigger: "blur" },
          //   // {
          //   //   validator: checkEmail,
          //   //   min: 9,
          //   //   max: 18,
          //   //   message: "邮箱格式错误",
          //   //   trigger: "blur",
          //   // },
          // ],

        },
      };
    },
    methods: {
      resetForm(formName) {
        // 有值就行
        this.$refs[formName].validate(valid => {
          if (valid) {
            // alert("提交成功!");
            this.$router.push("/main")
          } else {
            alert("你没有写完!!");
            // 重置
            this.$refs[formName].resetFields();
          }
        });
      },
    },
  };
</script>
