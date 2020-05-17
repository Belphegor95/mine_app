<!-- 广告视频区 -->
<template>
  <div class="MyMachineHome_box">
    <header class="header">
      <img src="../../assets/img/game/end.png" alt @click="goBack" />
    </header>

    <div class="zhanwei"></div>
    <div class="headerMsg">
      <div v-for="(item,index) in headerMsg" :key="index">
        <span v-text="item.value"></span>
        <span v-text="item.key"></span>
      </div>
    </div>
    <main>
      <van-empty v-if="usitolist.length === 0" description="暂无数据" />
      <ul v-else class="contentList">
        <li v-for="(item,index)  in usitolist" :key="index" @click="()=>popupShow=true">
          <span>
            <img v-if="item.pic" :src="this.baseUrl+ito.pic" alt />
            <img v-else-if="item.name == '微矿'" src="../../assets/img/game/mill_0.png" alt />
            <img v-else-if="item.name == '小矿'" src="../../assets/img/game/mill_1.png" alt />
            <img v-else-if="item.name == '中矿'" src="../../assets/img/game/mill_2.png" alt />
            <img v-else-if="item.name == '大矿'" src="../../assets/img/game/mill_3.png" alt />
            <img v-else-if="item.name == '富矿'" src="../../assets/img/game/mill_4.png" alt />
          </span>
          <div>
            <p>等级：{{ item.name }}</p>
            <p>算力：{{ item.computing }}</p>
            <p>采矿时间：{{ item.valid_time }}天</p>
            <p>投入产出比：{{ item.roi }}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // buyNumber: "",
      // buyPrc: "",
      // pwd: "",
      // popupShow: false,
      nextTo: false,
      usitolist: [],
      headerMsg: [
        { key: "矿机钱包", value: "0" },
        { key: "今日收益", value: "0" },
        { key: "有效矿机", value: "0" },
        { key: "算力", value: "0" }
      ]
      // loading: false,
      // finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 17804);
  },
  mounted() {
    this.getgame();
    this.getgame1();
  },
  methods: {
    // 获取头部信息
    getgame1: function() {
      this.token_post(this.$api.game_index, {
        type: 1
      })
        .then(data => {
          if (data.code === 200) {
            // if (data.data.ito_money) {
            //   this.headerMsg[0].value = data.data.ito_money
            // } else {

            // }
            this.headerMsg[0].value = data.data.ito_money
              ? data.data.ito_money
              : 0.0;
            this.headerMsg[1].value = data.data.today_money;
            this.headerMsg[2].value = data.data.ito;
            this.headerMsg[3].value = data.data.computing;
            this.friends = data.data.friends;
            this.gameMsg = data.data;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    getgame: function() {
      this.token_post(this.$api.game_index, {
        type: 2
      })
        .then(data => {
          if (data.code === 200) {
            this.usitolist = data.data.usito;
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
    onLoad() {
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 20) {
      //     this.finished = true;
      //   }
      // }, 1000);
    }
  }
};
</script>
<style scoped >
.MyMachineHome_box {
  background: url("../../assets/img/game/myMachineBgc.png") center center / 100%
    100% no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.headerMsg {
  display: flex;
  align-items: center;
  width: 92%;
  height: 1rem;
  background: white;
  border-radius: 0.1rem;
  /* background: url("../../assets/img/game/gameheaderBgc.png") center center /
    100% 100% no-repeat; */
}
.headerMsg div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.headerMsg div span:nth-child(1) {
  margin-bottom: 0.1rem;
}
.MyMachineHome_box > .zhanwei {
  width: 100%;
  height: 4.8rem;
}
.MyMachineHome_box main {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
.MyMachineHome_box main::-webkit-scrollbar {
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
