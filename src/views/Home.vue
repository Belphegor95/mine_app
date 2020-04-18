<template>
  <div class="home">
    <header class="header">
      <img src="../assets/img/home/qian.png" alt />
      <button>
        <span>已发行/已销毁</span>
      </button>
    </header>
    <div class="swipe_box">
      <van-swipe class="my-swipe" @change="onChange" :autoplay="3000" :show-indicators="false">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <!-- <van-swipe-item>4</van-swipe-item> -->
      </van-swipe>
    </div>
    <div class="swipe_bottom">
      <ul>
        <li
          :style="{width:current == 0?'.3rem':'.15rem',background:current == 0?'#0BAAFD':'#E3E3E3'}"
        ></li>
        <li
          :style="{width:current == 1?'.3rem':'.15rem',background:current == 1?'#0BAAFD':'#E3E3E3'}"
        ></li>
        <li
          :style="{width:current == 2?'.3rem':'.15rem',background:current == 2?'#0BAAFD':'#E3E3E3'}"
        ></li>
        <li
          :style="{width:current == 3?'.3rem':'.15rem',background:current == 3?'#0BAAFD':'#E3E3E3'}"
        ></li>
      </ul>
    </div>
    <div class="news">
      <img src="../assets/img/home/newLeft.png" alt />
      <van-notice-bar text="张三说李四今天不在家，赵四却说李四在家，李四说在刘四他家，刘四说李四不在他家，李四到底在那家。" />
      <img src="../assets/img/home/newRight.png" alt />
    </div>
    <div class="menu_box">
      <div @click="GameHome">
        <img src="../assets/img/home/tar1.png" />
        <p>我的好友</p>
      </div>
      <div @click="rut_push(201,'/deal/trading_floor')">
        <img src="../assets/img/home/tar2.png" />
        <p>交易大厅</p>
      </div>
      <div @click="rut_push(301,'/friendster/Friendster')">
        <img src="../assets/img/home/tar3.png" />
        <p>朋友圈</p>
      </div>
      <div>
        <img src="../assets/img/home/tar4.png" />
        <p>钱包</p>
      </div>
      <div @click="Advertising">
        <img src="../assets/img/home/tar5.png" />
        <p>广告</p>
      </div>
      <div @click="personal">
        <img src="../assets/img/home/tar6.png" />
        <p>我的</p>
      </div>
      <div @click="()=>$toast('暂未开放,敬请期待')">
        <img src="../assets/img/home/tar7.png" />
        <p>音频</p>
      </div>
      <div @click="()=>$toast('暂未开放,敬请期待')">
        <img src="../assets/img/home/tar8.png" />
        <p>视频直播</p>
      </div>
      <div @click="()=>$toast('暂未开放,敬请期待')">
        <img src="../assets/img/home/tar9.png" />
        <p>交易所</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      current: 0 // 当亲轮播图下标
    };
  },
  methods: {
    // 轮播图id回调
    onChange(index) {
      this.current = index;
    },
    personal: function() {
      this.$router.push("/personal/personal");
    },
    Advertising: function() {
      this.$router.push("/advertising");
    },
    // TradingFloor: function() {
    //   this.$store.commit("show_typeid", 201);
    //   this.$router.push("/deal/trading_floor");
    // },
    rut_push: function(id, rut) {
      this.$store.commit("show_typeid", id);
      this.$router.push(rut);
    },
    GameHome: function() {
      this.$router.push("/gameHome");
    }
  }
};
</script>

<style scoped>
.home {
  overflow: hidden;
}
.header {
  margin-top: 0.2rem;
  height: 0.78rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header img {
  height: 0.6rem;
}
.header button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 2.2rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  background: #398ef5;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.swipe_box {
  width: 92%;
  /* width: 6.9rem; */
  height: 3rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.2rem;
}
.swipe_bottom {
  width: 100%;
  height: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swipe_bottom ul {
  display: flex;
  align-items: center;
}
.swipe_bottom ul li {
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 0.075rem;
  background: rgba(227, 227, 227, 1);
  margin: 0 0.08rem;
  /* transition: width .2s ease; */
}
.news {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.news img:nth-child(1) {
  width: 1.2rem;
}
.news img:nth-last-child(1) {
  width: 0.4rem;
}
.menu_box {
  display: flex;
  flex-wrap: wrap;
}
.menu_box > div {
  /* padding: 0.55rem; */
  flex: 0 0 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  border: 0.01rem solid #f1f1f1;
  box-sizing: border-box;
}
.menu_box > div > img {
  height: 1.2rem;
}
.menu_box > div > p {
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.15rem;
}
</style>

<style scoped >
/* .van-swipe {
  width: 100%;
  height: 100%;
} */
.van-notice-bar {
  width: 70%;
}
.van-notice-bar {
  background-color: transparent !important;
}
.van-notice-bar__wrap {
  color: rgba(153, 153, 153, 1);
}
.my-swipe {
  height: 100%;
}
.van-swipe__track {
  height: 3rem !important;
}
.van-swipe__track > div {
  /* border-radius: 0.2rem; */
}
.van-swipe__indicator--active {
  background-color: #1989fa !important;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
