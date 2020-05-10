<!-- 签到 -->
<template>
  <div class="SignIn_box">
    <breadcrumb></breadcrumb>
    <div class="qiandao_box">
      <div class="qiandao">
        <span class="yellow">
          <p>1</p>
          <img src="../assets/img/pigeon.png" alt />
        </span>
        <span class="gray">
          <p>2</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>3</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>4</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>5</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>6</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>7</p>
          <img src="../assets/img/gold.png" alt />
        </span>
      </div>
      <p>坚持每天签到，收获更多</p>
      <van-button @click="sign" class="quedingbtn" type="info">确定</van-button>
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
export default {
  components: {
    breadcrumb
  },
  data() {
    return {};
  },
  methods: {
    sign: function () {
      this.token_post(this.$api.user_sign)
        .then(data => {
          if (data.code === 200) {
            this.$toast(data.msg)
            // console.log(data);
          } else {
            this.$toast(data.msg)
          }
        })
        .catch(() => {this.$toast.fail(this.$api.monmsg)});
    }
  }
};
</script>
<style scoped>
.SignIn_box {
  height: 100%;
  background-image: url("../assets/img/sign_inimg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;
}
.qiandao_box {
  position: absolute;
  top: 6.3rem;
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  text-align: center;
}
.qiandao {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.qiandao > span {
  /* width: 0.8rem; */
  height: 1rem;
  border-radius: 0.1rem;
  padding: 0.11rem 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qiandao > span > img {
  height: 0.39rem;
}
.qiandao_box > p {
  margin-top: 0.26rem;
  margin-bottom: 0.8rem;
}
.quedingbtn {
  width: 6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.yellow {
  background: rgba(251, 246, 196, 1);
}
.gray {
  background: rgba(247, 247, 247, 1);
}
</style>