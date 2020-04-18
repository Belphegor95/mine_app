<template>
  <div class="box">
    <div class="logo_box">
      <div>
        <div></div>
        <p class="logo_name">项目名称</p>
      </div>
    </div>
    <div class="login_box">
      <van-field v-model="text" placeholder="请输入您的手机号" />
      <van-field v-model="text" placeholder="请输入密码" />
      <div class="yanzheng_box">
        <van-field v-model="text" placeholder="请输入验证码" />
        <span class="yanzheng">1234</span>
      </div>
      <van-button class="login_button" type="primary" @click="home">登录</van-button>
      <div class="zhanghao_box">
        <span @click="register">注册账号</span>
        <span @click="deal">忘记密码</span>
        <!-- <a href>注册账号</a>
        <a href>忘记密码</a>-->
      </div>
    </div>
    <div class="xiazai_box">
      <a href>下载苹果app</a>
      <a href>下载安卓app</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  mounted() {},
  methods: {
    home: function() {
      this.$router.push("/home");
    },
    register: function() {
      this.$store.commit("show_typeid", 1);
      this.$router.push("/register");
    },
    deal: function() {
      this.$router.push("/deal");
    }
  }
};
</script>

<style  scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.box > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.login_box {
  flex: 1.5 !important;
  padding: 0 0.75rem;
}
.yanzheng_box {
  display: flex;
  justify-content: space-between;
}
.yanzheng {
  width: 2rem;
  height: 0.7rem;
}
/* .logo_box,.login_box {
    justify-content: center;
    align-items: center;
} */
.logo_box {
  text-align: center;
  align-items: center;
  justify-content: center;
}
.logo_name {
  font-size: 0.32rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  margin-top: 0.17rem;
}
.logo_box > div > div:nth-child(1) {
  width: 1.4rem;
  height: 1.4rem;
  margin: auto;
  border: 1px solid #ccc;
}
.login_button {
  background: #ebb14b;
  border: 1px solid #ebb14b;
  font-size: 0.3rem;
  margin-top: 0.36rem;
}
.zhanghao_box {
  display: flex;
  margin-top: 0.21rem;
  font-size: 0.3rem;
  justify-content: space-between;
}
.xiazai_box {
  /* display: block !important; */
  text-align: right;
  flex-direction: column-reverse !important;
}
.xiazai_box > a {
  margin-bottom: 0.3rem;
  margin-right: 0.34rem;
}
</style>

<style>
.login_box .van-cell {
  padding: 0;
  height: 0.7rem;
  margin-bottom: 0.31rem;
}
</style>