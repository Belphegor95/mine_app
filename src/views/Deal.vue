<template>
  <div class="deal">
    <breadcrumb></breadcrumb>
    <!-- 广告押金 -->
    <ul class="guanggao" v-if="typeid == 17701">
      <li>
        <span>押金金额</span>
        <van-field v-model="showconfig" readonly placeholder="请输入押金" />
      </li>
      <li>
        <span>支付密码</span>
        <van-field v-model="us_safe_pwd" type="password" placeholder="请输入支付密码" />
      </li>
      <li>
        <span></span>
        <p>发布广告要缴纳{{ showconfig }}押金，押金可退还。</p>
      </li>
    </ul>
    <!-- 退还押金 -->
    <ul class="tuihuan" v-else-if="typeid=== 17702">
      <li>
        <span>押金金额</span>
        <van-field v-model="text" placeholder="100.00" />
      </li>
      <li>
        <span>提现到</span>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">支付宝</van-radio>
          <van-radio name="2">银行卡</van-radio>
        </van-radio-group>
      </li>
      <li>
        <span>支付密码</span>
        <van-field v-model="text" placeholder="请输入支付密码" />
      </li>
      <li>
        <span></span>
        <p>退还押金请删除全部广告视频</p>
      </li>
    </ul>
    <!-- 提现 -->
    <ul class="tuihuan" v-else-if="typeid=== 17703">
      <li>
        <span>提现金额</span>
        <van-field v-model="text" placeholder="100.00" />
      </li>
      <li>
        <span>提现到</span>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">支付宝</van-radio>
          <van-radio name="2">银行卡</van-radio>
        </van-radio-group>
      </li>
      <li>
        <span>支付密码</span>
        <van-field v-model="text" placeholder="请输入支付密码" />
      </li>
      <li>
        <span></span>
        <p>退还押金请删除全部广告视频</p>
      </li>
    </ul>
    <div class="queding_box">
      <van-button @click="onbtnok" class="quedingbtn" type="info">确定</van-button>
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
      text: "",
      radio: "1",
      typeid: this.$store.getters.get_typeid,
      showconfig: 0,
      us_safe_pwd: ""
    };
  },
  mounted() {
    this.getshowconfig();
  },
  methods: {
    getshowconfig: function() {
      this.axios
        .post(this.$api.index_showconfig, {
          key: "deposit"
        })
        .then(data => {
          if (data.code == 200) {
            // this.$toast(data.msg);
            this.showconfig = Number(data.data);
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {this.$toast.fail(this.$api.monmsg)});
    },
    deposit: function() {
      if (this.us_safe_pwd.trim() == "") {
        this.$toast("支付密码输入有误");
        return;
      }
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.advert_deposit, {
        us_safe_pwd: this.us_safe_pwd
      })
        .then(data => {
          if (data.code == 200) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                this.$router.go(-1);
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {this.$toast.fail(this.$api.monmsg)});
    },
    onbtnok: function() {
      if (this.typeid == 17701) {
        this.deposit();
      }
    }
  }
};
</script>

<style scoped>
.deal {
  background: #f7f7f7;
  position: relative;
  height: 100%;
  width: 100%;
}
ul {
  background: #fff;
}
.guanggao,
.tuihuan {
  padding-bottom: 2.23rem;
}
.geren {
  padding-bottom: 0.6rem;
}
.geren_box {
  background: #fff;
}
.geren_box > div {
  border-top: 1px solid #f7f7f7;
  height: 1rem;
  padding: 0 0.3rem 0 0.31rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.geren_box > div > img {
  height: 0.3rem;
}
li {
  display: flex;
  padding-top: 0.3rem;
  padding-right: 0.3rem;
}
li > span {
  width: 2rem;
  height: 0.7rem;
  /* text-align: center; */
  line-height: 0.7rem;
  padding-left: 0.31rem;
  display: inline-block;
}
li > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  text-indent: 0.06rem;
}
.fasongbtn {
  width: 1.8rem;
  height: 0.7rem;
  margin-left: 0.4rem;
  line-height: 0.7rem !important;
}
i {
  color: #fd1a1a;
}

/* 确定 */
.queding_box {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quedingbtn {
  width: 6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.5rem;
}
</style>

<style>
.deal .van-cell {
  background: #f6f6f6;
  padding: 0 16px !important;
}
.deal .van-cell {
  flex: auto;
  width: 0px !important;
}
.deal .van-cell > div {
  display: flex;
}
</style>