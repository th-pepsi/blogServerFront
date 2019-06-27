<template>
  <div class="login-wrap">
    <div>
      用户名：
      <el-input v-model="username" placeholder="请输入用户名" class="but"></el-input>
    </div>
    <div style="margin-top:20px;">
      密码：
      <el-input v-model="password" placeholder="请输入密码" show-password class="but"></el-input>
    </div>
    <el-button type="primary" style="margin-top:20px" @click="blogList">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    blogList() {
      var that = this;
      this.$axios
        .post("http://127.0.0.1:3000/api/user/login", {
          params: {
            username: that.username,
            password: that.password
          }
        })
        .then(res => {
          console.log(res);
          if(res.data.error == '0'){
            that.$router.push('/blogList')
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-wrap {
  overflow: hidden;
  .but {
    width: 350px;
  }
}
</style>
