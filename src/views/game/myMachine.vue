<!-- 广告视频区 -->
<template>
  <div class="MyMachineHome_box">
    <header class="header">
      <img src="../../assets/img/game/end.png" alt @click="goBack" />
    </header>
    <div></div>
    <main>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell>
          <ul class="contentList">
            <li v-for="value  in list" :key="value" @click="()=>popupShow=true">
              <span>
                <img src="../../assets/img/game/text1.png" alt />
              </span>
              <div>
                <p>等级：微矿</p>
                <p>算力：0.01</p>
                <p>采矿时间：30天</p>
                <p>投入产出比：10/11</p>
              </div>
            </li>
          </ul>
        </van-cell>
      </van-list>
    </main>
    <!-- <van-popup v-model="popupShow">
      <div class="machineMsg">
        <div class="msgTop">
          <span>
            <img src="../../assets/img/game/text1.png" alt />
          </span>
          <div>
            <p>等级：微矿</p>
            <p>算力：0.01</p>
            <p>采矿时间：30天</p>
            <p>投入产出比：10/11</p>
          </div>
        </div>
        <ul class="zhifumima">
          <li>
            <span>购买数量</span>
            <van-field v-model="buyNumber" placeholder="请输入购买数量" />
          </li>
          <li>
            <span>购买价格</span>
            <van-field v-model="buyPrc" placeholder="请输入购买价格" />
          </li>
          <li>
            <span>支付密码</span>
            <van-field v-model="pwd" placeholder="请输入支付密码" />
          </li>
        </ul>
        <p>我的商务钱包：1232.00</p>
        <button>
          <span>确 认</span>
        </button>
      </div>
    </van-popup>-->
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
      list: [],
      loading: false,
      finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 17804);
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    pushTo(type) {
      this.$router.push(`/gameHome?tarbar=${type}`);
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
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
.MyMachineHome_box >div{
  width: 100%;
  height: 4.8rem;
}
.MyMachineHome_box main{
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
.MyMachineHome_box main::-webkit-scrollbar{
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
