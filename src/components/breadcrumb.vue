<template>
  <div class="boxFather">
    <div class="box">
      <div class="left_box">
        <img @click="back" src="@/assets/img/backimg.png" alt />
        <p v-if="$store.getters.get_typeid=== 1">注册信息</p>
        <p v-if="$store.getters.get_typeid=== 2">个人资料</p>
        <p v-if="$store.getters.get_typeid=== 3">更改登录密码</p>
        <p v-if="$store.getters.get_typeid=== 4">更改支付密码</p>
        <p v-if="$store.getters.get_typeid=== 5">绑定支付宝账号</p>
        <p v-if="$store.getters.get_typeid=== 6">绑定银行卡账号</p>
        <p v-if="$store.getters.get_typeid=== 7">联系客服</p>
        <p v-else-if="$store.getters.get_typeid=== 101">我的团队</p>
        <p v-else-if="$store.getters.get_typeid=== 102">我的交易单</p>
        <p v-else-if="$store.getters.get_typeid=== 103">我的广告</p>
        <p v-else-if="$store.getters.get_typeid=== 104">分享推广</p>
        <p v-else-if="$store.getters.get_typeid=== 105">上传广告</p>
        <p v-else-if="$store.getters.get_typeid=== 106">我的钱包</p>
        <p v-else-if="$store.getters.get_typeid=== 10601">提现</p>
        <p v-else-if="$store.getters.get_typeid=== 10602">矿机钱包记录</p>
        <p v-else-if="$store.getters.get_typeid=== 10603">商务钱包记录</p>
        <p v-else-if="$store.getters.get_typeid=== 177">广告</p>
      </div>
      <div class="right_box" v-if="$store.getters.get_typeid=== 103">
        <p v-if="is_delet" @click="manage">管理</p>
        <p v-else @click="delet">删除广告</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: {
    // filedata: {
    //   type: Object
    // },
    // fileurl: {
    //   type: String
    // },
    // typeid: {
    //   type: Number
    // }
  },
  data: function() {
    return {
      is_delet: true
      // typeid: this.$store.getters.get_typeid
    };
  },
  watch: {
    "$store.getters.get_typeid": function(newFlag) {
      // 需要执行的代码
      this.typeid = newFlag;
      this.$emit("upload_true", true);
    }
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    },
    manage: function() {
      this.is_delet = !this.is_delet;
    },
    delet: function() {
      this.is_delet = !this.is_delet;
    }
  }
};
</script>

<style scoped>
.boxFather {
  padding: 0.3rem 0.27rem;
  height: 0.4rem;
}
.box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.27rem;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #f7f7f7;
}
.left_box {
  display: flex;
}
.left_box > img {
  /* width: 0.24rem; */
  height: 0.4rem;
}
.left_box > p {
  font-family: Adobe Heiti Std;
  margin-left: 0.32rem;
  font-weight: normal;
  font-size: 0.3rem;
  color: #333;
}
.right_box {
  float: right;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
</style>