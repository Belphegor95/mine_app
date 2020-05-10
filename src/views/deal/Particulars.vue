<!-- 交易详情 -->
<template>
  <div class="Particulars">
    <breadcrumb></breadcrumb>
    <div class="jine_box">
      <p>支付金额</p>
      <p>{{ buydata.price }}</p>
    </div>
    <!-- <div class="xinxi_box"> -->
    <ul>
      <li>
        <span>对方ID</span>
        <span>{{ buydata.id }}</span>
      </li>
      <li>
        <span>手机号</span>
        <span>{{ buydata.us_tel }}</span>
      </li>
      <li>
        <span>支付宝账号</span>
        <span>{{ buydata.ali_account }}</span>
      </li>
      <li>
        <span>开户银行</span>
        <span>{{ buydata.us_bank }}</span>
      </li>
      <li>
        <span>持卡人姓名</span>
        <span>{{ buydata.us_bank_person }}</span>
      </li>
      <li>
        <span>银行卡号</span>
        <span>{{ buydata.bank_account }}</span>
      </li>
      <li>
        <span>开户地址</span>
        <span>{{ buydata.bank_place }}</span>
      </li>
    </ul>
    <div class="up_box">
      <div class="upbtn_box">
        <van-uploader v-model="fileList" :preview-image="false" :after-read="upvoucher">
          <img src="../../assets/img/deal/uploadingimg.png" alt />
          <p>请上传转账凭证</p>
        </van-uploader>
      </div>
      <p>温馨提示：请在2小时内完成支付，否者会封号处理</p>
    </div>

    <div class="zhifu_box">
      <van-button class="zhifubtn" type="info">我已支付</van-button>
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
    return {
      fileList: [],
      buydata: this.$route.query
    };
  },
  mounted() {
    // console.info(this.buydata)
  },
  methods: {
    upvoucher: function() {
      let arr = [];
      arr.push(this.fileList[0].content);
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.trade_edit_voucher, {
        id: this.$route.query.id,
        voucher: this.fileList[0].content
      })
        .then(data => {
          if (data.code === 200) {
            this.$toast(data.msg);
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.Particulars {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.jine_box {
  width: 100%;
  height: 1.86rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/deal/particularsimg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.jine_box > p:nth-child(1) {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  margin-bottom: 0.3rem;
}
.jine_box > p:nth-child(2) {
  font-size: 0.6rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
ul {
  height: 3.6rem;
  padding: 0.3rem 0.7rem;
}
li {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.up_box {
  flex: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.upbtn_box {
  width: 3.2rem;
  height: 3.8rem;
  border: 1px dashed rgba(70, 148, 252, 1);
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 0.31rem;
}
.upbtn_box img {
  width: 3rem;
  height: 3.6rem;
  background: rgba(224, 233, 248, 1);
  border-radius: 10px;
}
.upbtn_box p {
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(144, 161, 196, 1);
  position: absolute;
  bottom: 0.58rem;
  left: 0.4rem;
}
.up_box > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}

.zhifu_box {
  width: 100%;
  height: 0.98rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(225, 225, 225, 1);
}
.zhifubtn {
  width: 6rem;
  height: 0.8rem;
  border-radius: 0.35rem;
}
</style>