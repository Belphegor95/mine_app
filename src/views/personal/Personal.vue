<!-- 个人中心 -->
<template>
  <div class="personalimg_box">
    <head_></head_>
    <div class="geren_box">
      <div class="geren">
        <img src="../../assets/img/personal/portraitimg.png" />
        <div>
          <p>雷厉风行</p>
          <p>ID:654123</p>
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
      <li @click="rut_push(false,'register',6)">
        <img src="../../assets/img/personal/serviceimg.png" alt />
        <p>联系客服</p>
      </li>
      <li @click="quit">
        <img src="../../assets/img/personal/quitimg.png" alt />
        <p>退出</p>
      </li>
    </ul>
  </div>
</template>

<script>
import head_ from "@/components/head";
export default {
  components: {
    head_
  },
  methods: {
    rut_push: function(is, rut, typeid) {
      if (is) {
        this.$router.push("/personal/" + rut);
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