<template>
  <div class="boxFather">
    <div class="box">
      <div class="left_box">
        <img @click="back" src="@/assets/img/backimg.png" alt />
        <p v-text="getTitle($store.getters.get_typeid)"></p>
      </div>
      <div class="right_box" v-if="$store.getters.get_typeid=== 103">
        <p v-if="is_delet" @click="manage">管理</p>
        <p v-else @click="manage">删除广告</p>
      </div>
      <div class="right_box" v-if="$store.getters.get_typeid=== 301">
        <p v-if="is_delet" @click="manage">发布朋友圈</p>
      </div>
      <div class="right_box" v-if="$store.getters.get_typeid=== 302">
        <p v-if="is_delet" @click="manage">发布</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  data: function() {
    return {
      is_delet: true,
      titles: [
        { id: 1, title: "注册信息" },
        { id: 2, title: "个人资料" },
        { id: 3, title: "更改登录密码" },
        { id: 4, title: "更改支付密码" },
        { id: 5, title: "绑定支付宝账号" },
        { id: 6, title: "绑定银行卡账号" },
        { id: 7, title: "联系客服" },
        { id: 101, title: "我的团队" },
        { id: 102, title: "我的交易单" },
        { id: 103, title: "我的广告" },
        { id: 104, title: "分享推广" },
        { id: 105, title: "上传广告" },
        { id: 106, title: "我的钱包" },
        { id: 10601, title: "提现" },
        { id: 10602, title: "矿机钱包记录" },
        { id: 10603, title: "商务钱包记录" },
        { id: 177, title: "广告" },
        { id: 201, title: "交易大厅" },
        { id: 202, title: "交易详情" },
        { id: 301, title: "朋友圈" },
        { id: 302, title: "返回" }
      ]
    };
  },
  methods: {
    getTitle: function(typeid) {
      let title = "";
      this.titles.some(item => {
        if (item.id == typeid) {
          title = item.title;
          return item.title;
        }
      });
      return title;
    },
    back: function() {
      this.$router.go(-1);
    },
    manage: function() {
      this.is_delet = !this.is_delet;
      this.$emit("is_manage", this.is_delet);
    }
  }
};
</script>

<style scoped>
.boxFather {
  padding: 0.3rem 0.27rem;
  box-sizing: border-box;
  height: 1rem;
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