<!-- 个人中心 -->
<template>
  <div class="personalimg_box">
    <breadcrumb></breadcrumb>
    <div class="geren_box">
      <div class="geren">
        <img :src="$api.baseUrl + user.us_head_pic" />
        <div>
          <p>{{ user.us_name }}</p>
          <p>ID:{{ user.id }}</p>
        </div>
      </div>
    </div>
    <ul>
      <li @click="rut_push(true,'group')">
        <img src="../../assets/img/personal/friendimg.png" alt />
        <p>我的团队</p>
      </li>
      <li @click="rut_push(true,'dealing_slip')">
        <img src="../../assets/img/personal/detailimg.png" alt />
        <p>我的交易单</p>
      </li>
      <li @click="rut_push(true,'advertising')">
        <img src="../../assets/img/personal/advertisingimg.png" alt />
        <p>我的广告</p>
      </li>
      <li @click="rut_push(true,'share')">
        <img src="../../assets/img/personal/shareimg.png" alt />
        <p>分享推广</p>
      </li>
      <li @click="rut_push(false,'register',2)">
        <img src="../../assets/img/personal/dataimg.png" alt />
        <p>个人资料</p>
      </li>
      <li @click="rut_push(true,'burse')">
        <img src="../../assets/img/personal/friendimg.png" alt />
        <p>我的钱包</p>
      </li>
      <li @click="rut_push(false,'register',7)">
        <img src="../../assets/img/personal/serviceimg.png" alt />
        <p>联系客服</p>
      </li>
      <li @click="modal = true">
        <img src="../../assets/img/personal/quitimg.png" alt />
        <p>退出</p>
      </li>
    </ul>
    <van-popup class="modal_box" v-model="modal_money">
      <h4>个人信息</h4>
      <p>请完善您的银行和支付信息</p>
      <div class="btn_box">
        <span @click="modal_money = false">取消</span>
        <span @click="rut_push(false,'register',2)">确定</span>
      </div>
    </van-popup>
    <van-popup class="modal_box" v-model="modal">
      <h4>退出登录</h4>
      <p>您真的要退出登录吗</p>
      <div class="btn_box">
        <span @click="modal = false">取消</span>
        <span @click="quit">确定</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
// import head_ from "@/components/head";
import breadcrumb from "@/components/breadcrumb";
export default {
  components: {
    // head_,
    breadcrumb
  },
  data() {
    return {
      user: this.$store.state.user,
      modal: false,
      modal_money: false
    };
  },
  mounted() {
    this.$store.commit("show_typeid", 107);
  },
  methods: {
    rut_push: function(is, rut, typeid) {
      if (is) {
        if (rut === "advertising") {
          if (this.user.us_bank && this.user.us_safe_pwd) {
            this.$router.push("/personal/" + rut);
          } else {
            this.modal_money = true;
          }
        } else {
          this.$router.push("/personal/" + rut);
        }
      } else {
        this.$store.commit("show_typeid", typeid);
        this.$router.push("/" + rut);
      }
    },
    quit: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.personalimg_box {
  height: 100%;
  background-color: #f1f1f1;
}
.geren_box {
  background-color: #fff;
  padding-bottom: 0.34rem;
}
.geren {
  width: 6.9rem;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-image: url("../../assets/img/personal/personalimg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.geren > img {
  height: 1rem;
  margin: 0 0.2rem;
  border-radius: 50%;
}
.geren > div {
  height: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.geren > div > p {
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.geren > div > p:nth-child(2) {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}

ul {
  background-color: #fff;
}
li {
  display: flex;
  height: 0.9rem;
  align-items: center;
  border-top: 1px solid #f7f7f7;
}
li > img {
  height: 0.5rem;
  margin: 0 0.49rem 0 0.61rem;
}
</style>
<style>
.modal_box {
  width: 80%;
  padding: 0 0.5rem;
  border-radius: 0.06rem;
}
.modal_box > h4 {
  font-size: 0.4rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 0.7rem;
  margin-top: 0.28rem;
}
.modal_box > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  line-height: 0.7rem;
  margin-bottom: 0.76rem;
}
.modal_box .btn_box {
  font-size: 0.3rem;
  font-family: PingFang;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 0.7rem;
  margin-bottom: 0.28rem;
  height: 0.7rem;
}
.modal_box .btn_box > span {
  margin-left: 0.78rem;
  float: right;
  box-sizing: border-box;
}
</style>