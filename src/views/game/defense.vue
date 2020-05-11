<!-- 矿机市场 -->
<template>
  <div class="MachineHome_box">
    <header class="header">
      <img src="../../assets/img/game/end.png" alt @click="goBack" />
      <span @click="goBack">防偷管理</span>
    </header>
    <div style="padding: 0.3rem 0.27rem;height:0.46rem"></div>
    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell>-->
    <van-empty v-if="itolist.length === 0" description="暂无数据" />
    <ul v-else class="contentList">
      <li v-for="(ito,index)  in itolist" :key="index" @click="onito(ito)">
        <span>
          <img v-if="ito.pic" :src="this.baseUrl+ito.pic" alt />
          <img v-else src="../../assets/img/game/text1.png" alt />
        </span>
        <div>
          <p>等级：{{ ito.name }}</p>
          <p>防御：{{ ito.prevent }}</p>
          <p>价格：{{ ito.price }}天</p>
          <p>时间：{{ ito.viod_time }}</p>
        </div>
      </li>
    </ul>
    <!-- </van-cell>
    </van-list>-->
    <van-popup v-model="popupShow">
      <div class="machineMsg" v-if="store">
        <div class="msgTop">
          <span>
            <img v-if="store.pic" :src="this.baseUrl+store.pic" alt />
            <img v-else src="../../assets/img/game/text1.png" alt />
          </span>
          <div>
            <p>等级：{{ store.name }}</p>
            <p>防御：{{ store.prevent }}</p>
            <p>价格：{{ store.price }}天</p>
            <p>时间：{{ store.viod_time }}</p>
          </div>
        </div>
        <ul class="zhifumima">
          <!-- <li>
            <span>购买价格</span>
            <van-field v-model="buyPrc" placeholder="请输入购买价格" />
          </li>-->
          <li>
            <span>支付密码</span>
            <van-field v-model="pwd" type="password" placeholder="请输入支付密码" />
          </li>
        </ul>
        <p style="marginTop:2.4rem;" >我的商务钱包：{{ user.business_money?user.business_money:'0.0000' }}</p>
        <button @click="buyito">
          <span>确 认</span>
        </button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      buyNumber: "",
      buyPrc: "",
      pwd: "",
      id: 0,
      store: undefined,
      popupShow: false,
      nextTo: false,
      itolist: []
    };
  },
  created() {
    this.$store.commit("show_typeid", 17804);
  },
  mounted() {
    this.getito();
  },
  methods: {
    getito: function() {
      this.axios
        .get(this.$api.index_tools)
        .then(data => {
          if (data.code === 200) {
            this.itolist = data.data;
            // this.$toast(data)
          }
        })
        .catch(() => {});
    },
    buyito: function() {
      if (this.pwd.trim() === "") {
        this.$toast("支付密码输入有误");
        return;
      }
      this.token_post(this.$api.game_buytool, {
        us_safe_pwd: this.pwd,
        id: this.store.id
      })
        .then(data => {
          if (data.code === 200) {
            this.popupShow = false;
            this.$toast(data.msg);
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    goBack() {
      this.$router.go(-1);
    },
    pushTo(type) {
      this.$router.push(`/gameHome?tarbar=${type}`);
    },
    onito: function(store) {
      this.buyNumber = "";
      this.pwd = "";
      this.popupShow = true;
      this.store = store;
    }
  }
};
</script>
<style scoped >
.MachineHome_box {
  background: #010f34;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.MachineHome_box::-webkit-scrollbar {
  display: none;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 0.3rem 0.27rem;
  box-sizing: border-box;
  font-size: 0.36rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  background: #010f34;
}
.header img {
  height: 0.4rem;
  margin-right: 0.3rem;
}

.contentList {
  width: 100%;
}
.contentList li {
  width: 100%;
  height: 2rem;
  background: #081945;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
}
.contentList li > span {
  height: 1.6rem;
  width: 1.6rem;
  background: #fff;
  border-radius: 0.15rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contentList li > span img {
  width: 1.42rem;
  max-height: 1.38rem;
}
.contentList li div {
  height: 1.6rem;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.contentList li div {
  line-height: 0.4rem;
}
.machineMsg {
  width: 7.1rem;
  height: 8rem;
  background: #fff;
  border-radius: 0.2rem;
  overflow: hidden;
}
.msgTop {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
  margin-top: 0.3rem;
}
.msgTop > span {
  height: 1.6rem;
  width: 1.6rem;
  background: rgba(246, 246, 246, 1);
  border-radius: 0.15rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.msgTop > span img {
  width: 1.42rem;
  max-height: 1.38rem;
}
.msgTop div {
  height: 1.6rem;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #333333;
}
.msgTop div {
  line-height: 0.4rem;
}
.zhifumima {
  margin-top: 0.3rem;
}
.zhifumima li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.6rem;
  padding: 0 0.8rem 0 0.55rem;
  margin-bottom: 0.3rem;
}
.zhifumima li > span {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.machineMsg > p {
  margin-top: 1.2rem;
  margin-bottom: 0.2rem;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin-left: 0.55rem;
}
.machineMsg > button {
  width: 6rem;
  height: 0.8rem;
  display: flex;
  margin: 0 auto;
  border: none;
  background: #398ef5;
  align-items: center;
  justify-content: center;
  font-size: 0.3rem;
  font-family: PingFang;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
</style>

<style scoped >
.van-tabs__nav {
  background: #f7f7f7 !important;
}
.van-cell,
.van-list {
  padding: 0 !important;
  background-color: transparent !important;
}
.zhifumima .van-cell {
  background-color: rgba(246, 246, 246, 1) !important;
}
/* .van-tabs__line {
  bottom: 0.4rem !important;
} */
.van-field {
  width: 4rem !important;
  height: 0.6rem !important;
  display: flex;
  align-items: center;
  background: rgba(246, 246, 246, 1) !important;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  padding-left: 0.2rem !important;
  box-sizing: border-box;
}
.van-popup {
  background: transparent;
}
</style>
