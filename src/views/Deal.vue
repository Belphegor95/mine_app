<template>
  <div class="register">
    <breadcrumb></breadcrumb>
    <!-- 广告押金 -->
    <ul class="guanggao" v-if="typeid === 2">
      <li>
        <span>押金金额</span>
        <van-field v-model="text" placeholder="103164" />
      </li>
      <li>
        <span>支付密码</span>
        <van-field v-model="text" placeholder="请输入支付密码" />
      </li>
      <li>
        <span></span>
        <p>发布广告要缴纳95.00押金，押金可退还。</p>
      </li>
    </ul>
    <!-- 退还押金 -->
    <ul class="tuihuan" v-else-if="typeid=== 10602">
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
    <ul class="tuihuan" v-else-if="typeid=== 10601">
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
      <van-button class="quedingbtn" type="info">确定</van-button>
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
      typeid: this.$store.getters.get_typeid
    };
  }
};
</script>

<style scoped>
.register {
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
  margin-bottom: 0.5rem;
}
</style>

<style>
.register .van-cell {
  background: #f6f6f6;
  height: 0.7rem;
}
.register .van-cell {
  flex: auto;
  width: 0px !important;
}
</style>