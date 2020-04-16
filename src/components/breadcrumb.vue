<template>
  <div class="boxFather">
    <div class="box">
      <img @click="back" src="@/assets/img/backimg.png" alt />
      <p v-text=""></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  data: function() {
    return {
      titles:[
        {id:1,title:'注册信息'},
        {id:2,title:'个人资料'},
        {id:6,title:'联系客服'},
        {id:101,title:'我的团队'},
        {id:102,title:'我的交易单'},
        {id:103,title:'我的广告'},
        {id:104,title:'分享推广'},
        {id:105,title:'上传广告'},
        {id:106,title:'我的钱包'},
        {id:10602,title:'矿机钱包记录'},
        {id:10603,title:'商务钱包记录'},
        {id:107,title:'广告'},
      ]
    };
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
.boxFather {
  padding: 0.3rem 0.27rem;
  box-sizing: border-box;
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
  box-sizing: border-box;
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