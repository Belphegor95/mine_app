<template>
  <div class="home">
    <head_></head_>
    <div class="swipe_box">
      <van-swipe class="my-swipe" :autoplay="300000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <!-- <van-swipe-item>4</van-swipe-item> -->
      </van-swipe>
    </div>
    <div>
      <div>新闻快讯</div>
    </div>
    <div>已发放</div>
    <div class="menu_box">
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>我的好友</p>
      </div>
      <div>
        <img @click="TradingFloor" src="../assets/img/friendimg.png" />
        <p>交易大厅</p>
      </div>
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>朋友圈</p>
      </div>
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>广告</p>
      </div>
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>钱包</p>
      </div>
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>签到</p>
      </div>
      <div @click="personal">
        <img src="../assets/img/friendimg.png" />
        <p>我的</p>
      </div>
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>交易所</p>
      </div>
      <div>
        <img src="../assets/img/friendimg.png" />
        <p>音频</p>
      </div>
      <div @click="Advertising" >
        <img src="../assets/img/friendimg.png" />
        <p>视频直播</p>
      </div>
    </div>
  </div>
</template>

<script>
import head_ from "@/components/head";
export default {
  components: {
    head_
  },
  methods: {
    personal: function () {
      this.$router.push("/personal/personal")
    },
    Advertising: function () {
      this.$router.push("/advertising")
    },
    TradingFloor: function () {
      this.$store.commit("show_typeid", 201);
      this.$router.push("/deal/trading_floor")
    }
  }
};
</script>

<style scoped>
.swipe_box {
  width: 92%;
  /* width: 6.9rem; */
  height: 3.72rem;
  margin: 0 auto;
  overflow: hidden;
}

.menu_box {
  display: flex;
  flex-wrap: wrap;
}
.menu_box > div {
  /* padding: 0.55rem; */
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2rem;
}
.menu_box > div > img {
  height: 0.7rem;
}
.menu_box > div > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.15rem;
}
</style>

<style>
/* .van-swipe {
  width: 100%;
  height: 100%;
} */
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
  background-color: #1989fa!important;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
