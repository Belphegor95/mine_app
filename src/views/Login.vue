<template>
  <div class="box">
    <div class="logo_box">
      <div>
        <div></div>
        <p class="logo_name">项目名称</p>
      </div>
    </div>
    <div class="login_box">
      <van-field v-model="account" placeholder="请输入您的手机号" />
      <van-field type="password" v-model="password" placeholder="请输入密码" />
      <div class="yanzheng_box">
        <van-field v-model="verification" placeholder="请输入验证码" />
        <div class="yzm" @click="originalCodeUpdata">
          <i
            v-for="(item,index) in originalCode"
            :key="index"
            v-text="item.code"
            :style="{color:item.color,transform:item.transform}"
          ></i>
        </div>
      </div>
      <van-button class="login_button" type="primary" @click="home">登录</van-button>
      <div class="zhanghao_box">
        <span @click="register">注册账号</span>
        <!-- <span @click="deal">忘记密码</span> -->
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
      account: "",
      password: "",
      verification: "",
      originalCode: [] // 用来生成验证码
    };
  },
  mounted() {},
  methods: {
    originalCodeUpdata() {
      // 随机生成验证码
      let y_code = "";
      let originalCode = [];
      for (let a = 0; a < 4; a++) {
        let code = Math.round(Math.random() * 9);
        originalCode.push({
          code,
          color: `rgb(${Math.round(Math.random() * 255) +
            "," +
            Math.round(Math.random() * 255) +
            "," +
            Math.round(Math.random() * 255)})`,
          transform: `rotateZ(${
            Math.random() > 0.5 ? "+" : "-" + Math.round(Math.random() * 20)
          }deg) translateY(${
            Math.random() > 0.5
              ? "+"
              : "-" + Math.round(Math.random() * 10) * 0.01
          }rem)`
        });
        y_code += code;
      }
      this.y_code = y_code;
      this.originalCode = originalCode;
    },
    home: function() {
      if (this.account === "") {
        this.$toast("账号未输入");
        return;
      } else if (this.password === "") {
        this.$toast("密码未输入");
        return;
      } else if (this.verification === "") {
        this.$toast("验证码未输入");
        return;
      }
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      localStorage.clear();
      window.localStorage.account = this.account;
      window.localStorage.password = this.password;
      this.token_get(this.$api.user_login)
        .then(data => {
          if (data.code == 200) {
            this.$store.commit("show_user", data.data);
            this.$toast({
              type: 'success',
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                this.$router.push("/home");
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast(this.$api.monmsg);
        });
    },
    register: function() {
      this.$store.commit("show_typeid", 1);
      this.$router.push("/register");
    },
    deal: function() {
      this.$router.push("/deal");
    }
  },
  created() {
    this.originalCodeUpdata(); // 初始化验证码
  }
};
</script>

<style  scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 13.34rem;
  background: url("../assets/img/appStart.jpg") center center / 100% 100%
    no-repeat;
}
.box > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.box > div:nth-child(1) {
  flex: none;
  height: 5rem;
}
.login_box {
  flex: 1.5 !important;
  padding: 0 0.75rem;
}
.yanzheng_box {
  display: flex;
  justify-content: space-between;
}
.yzm {
  width: 2rem;
  height: 0.7rem;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.yzm i {
  flex: 1;
  font-size: 0.3rem;
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
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.xiazai_box {
  /* display: block !important; */
  text-align: right;
  flex-direction: column-reverse !important;
}
.xiazai_box > a {
  margin-bottom: 0.3rem;
  margin-right: 0.34rem;
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.login_box .van-cell {
  padding: 0;
  height: 0.7rem;
  margin-bottom: 0.31rem;
  background-color: transparent !important;
}
.van-cell:not(:last-child)::after {
  left: 0;
}
</style>

<style>
.login_box .van-field__control {
  font-size: 0.3rem !important;
  font-family: PingFang;
  font-weight: 400;
  color: rgba(255, 255, 255, 1) !important;
}
.login_box .van-field__control::-webkit-input-placeholder {
  font-size: 0.3rem;
  font-family: PingFang;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>