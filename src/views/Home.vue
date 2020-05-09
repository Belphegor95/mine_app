<template>
  <div class="home">
    <header class="header">
      <img @click="rut_push(901,'/sign_in')" src="../assets/img/home/qian.png" alt />
      <button>
        <span>已发行/已销毁</span>
      </button>
    </header>
    <div class="swipe_box">
      <van-swipe class="my-swipe" @change="onChange" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in shuffling" :key="index">
          <img :src="$api.baseUrl + image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="swipe_bottom">
      <ul>
        <li
          v-for="(image, index) in shuffling"
          :key="index"
          :style="{width:current == 0?'.3rem':'.15rem',background:current == 0?'#0BAAFD':'#E3E3E3'}"
        ></li>
        <!-- <li
          :style="{width:current == 1?'.3rem':'.15rem',background:current == 1?'#0BAAFD':'#E3E3E3'}"
        ></li>
        <li
          :style="{width:current == 2?'.3rem':'.15rem',background:current == 2?'#0BAAFD':'#E3E3E3'}"
        ></li>
        <li
          :style="{width:current == 3?'.3rem':'.15rem',background:current == 3?'#0BAAFD':'#E3E3E3'}"
        ></li>-->
      </ul>
    </div>
    <div class="news">
      <img @click="rut_push(401,'/journalism/journalism')" src="../assets/img/home/newLeft.png" alt />
      <van-notice-bar :text="notice" />
      <img
        @click="rut_push(401,'/journalism/journalism')"
        src="../assets/img/home/newRight.png"
        alt
      />
    </div>
    <div class="menu_box">
      <div @click="GameHome">
        <img src="../assets/img/home/tar1.png" />
        <p>赏金矿场</p>
      </div>
      <div @click="rut_push(201,'/deal/trading_floor')">
        <img src="../assets/img/home/tar2.png" />
        <p>交易大厅</p>
      </div>
      <div @click="rut_push(301,'/friendster/Friendster')">
        <img src="../assets/img/home/tar3.png" />
        <p>朋友圈</p>
      </div>
      <div @click="rut_push(106,'/personal/burse')">
        <img src="../assets/img/home/tar4.png" />
        <p>钱包</p>
      </div>
      <div @click="Advertising">
        <img src="../assets/img/home/tar5.png" />
        <p>任务中心</p>
      </div>
      <div @click="()=>$toast('暂未开放,敬请期待')">
        <img src="../assets/img/home/tar9.png" />
        <p>交易所</p>
      </div>
      <div @click="()=>$toast('暂未开放,敬请期待')">
        <img src="../assets/img/home/tar7.png" />
        <p>音频</p>
      </div>
      <div @click="()=>$toast('暂未开放,敬请期待')">
        <img src="../assets/img/home/tar8.png" />
        <p>视频直播</p>
      </div>

      <div @click="rut_push(107,'/personal/personal')">
        <img src="../assets/img/home/tar6.png" />
        <p>我的</p>
      </div>
    </div>
    <van-popup class="modal_box" v-model="modal_money">
      <h4>个人信息</h4>
      <p>请完善您的银行和支付信息</p>
      <div class="btn_box">
        <span @click="modal_money = false">取消</span>
        <span @click="rut_register(2,'register')">确定</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: this.$store.state.user,
      shuffling: [], //轮播图地址
      notice: "", // 走马灯
      current: 0, // 当亲轮播图下标
      is_money: false,
      modal_money: false
    };
  },
  mounted() {
    this.getSwipeImg();
    if (this.user.us_bank && this.user.us_safe_pwd) {
      this.is_money = true;
    }
  },
  methods: {
    getSwipeImg: function() {
      this.axios
        .get(this.$api.index_index, {})
        .then(data => {
          if (data.code == 200) {
            // console.info(data)
            this.notice = data.data.news;
            this.shuffling = data.data.shuffling;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast(this.$api.monmsg);
        });
    },
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
      if (id === 201) {
        if (this.is_money) {
          this.$store.commit("show_typeid", id);
          this.$router.push(rut);
        } else {
          this.modal_money = true;
        }
      } else {
        this.$store.commit("show_typeid", id);
        this.$router.push(rut);
      }
    },
    rut_register: function(id, rut) {
      this.$store.commit("show_typeid", id);
      this.$router.push(rut);
    },
    GameHome: function() {
      if (this.is_money) {
        this.$router.push("/gameHome");
      } else {
        this.modal_money = true;
      }
    }
  }
};
</script>

<style scoped>
.home {
  overflow: hidden;
  background: #fff;
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
.swipe_box img {
  height: 3rem;
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
  background: #f1f1f1;
}
.menu_box > div {
  /* padding: 0.55rem; */
  /* flex: 0 0 33%; */
  background: #fff;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  margin-top: 1px;
}
.menu_box > div:nth-child(3n + 2) {
  margin: 0 1px;
  margin-top: 1px;
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
