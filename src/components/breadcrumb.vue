<template>
  <div class="boxFather">
    <div class="box">
      <img @click="back" src="@/assets/img/backimg.png" alt />
      <p v-if="typeid=== 1">注册信息</p>
      <p v-if="typeid=== 2">个人资料</p>
      <p v-if="typeid=== 6">联系客服</p>
      <p v-else-if="typeid=== 101">我的团队</p>
      <p v-else-if="typeid=== 102">我的交易单</p>
      <p v-else-if="typeid=== 103">我的广告</p>
      <p v-else-if="typeid=== 104">分享推广</p>
      <p v-else-if="typeid=== 105">上传广告</p>
      <p v-else-if="typeid=== 106">我的钱包</p>
      <p v-else-if="typeid=== 10602">矿机钱包记录</p>
      <p v-else-if="typeid=== 10603">商务钱包记录</p>
      <p v-else-if="typeid=== 177">广告</p>
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
      typeid: this.$store.getters.get_typeid
    };
  },
  methods: {
    back: function() {
      this.$router.go(-1);
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
  padding: 0.3rem 0.27rem;
  background: #fff;
  border-bottom: 1px solid #f7f7f7;
}
.box > img {
  /* width: 0.24rem; */
  height: 0.4rem;
}
.box > p {
  font-family: Adobe Heiti Std;
  margin-left: 0.32rem;
  font-weight: normal;
  font-size: 0.3rem;
  color: #333;
}
</style>