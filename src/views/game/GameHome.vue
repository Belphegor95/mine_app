<!-- 交易单 -->
<template>
  <div class="GameHome_box">
    <!-- 头部信息展示部分 -->
    <header class="headerMsg">
      <div v-for="(item,index) in headerMsg" :key="index">
        <span v-text="item.value"></span>
        <span v-text="item.key"></span>
      </div>
    </header>
    <!-- 游戏内贴图 -->
    <main class="gameMsg">
      <!-- 返回 -->
      <img src="../../assets/img/game/gameGoback.png" alt class="goBack" @click="goBack" />
      <!-- 狗 -->
      <!-- <img src="" alt="" class="dog" > -->
      <!-- 旷工带机器 -->
      <!-- <img src="" alt="" class="man" > -->
    </main>
    <!-- 底部导航部分 -->
    <footer class="gameTarbar">
      <div @click="tarPush(1)">
        <!-- 角标 -->
        <span>{{ friends }}</span>
        <img src="../../assets/img/game/gameTar1.png" alt />
      </div>
      <div @click="tarPush(2)">
        <img src="../../assets/img/game/gameTar2.png" alt />
      </div>
      <div @click="tarPush(3)">
        <img src="../../assets/img/game/gameTar3.png" alt />
      </div>
      <div @click="tarPush(4)">
        <img src="../../assets/img/game/gameTar4.png" alt />
      </div>
      <div @click="collect">
        <img src="../../assets/img/game/gameTar5.png" alt />
      </div>
    </footer>
    <!-- 游戏部分功能弹框 -->
    <van-popup v-model="popupShow" position="left">
      <div class="tarbarContentBox">
        <FriendModular v-if="tarbarType == 1" />
        <FriendAdd v-else-if="tarbarType == 101" />
        <FriendRecommend v-else-if="tarbarType == 102" />
        <Machine v-else-if="tarbarType == 2" />
        <MyMachine v-else-if="tarbarType == 3" />
        <Defense v-else-if="tarbarType == 4" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import FriendModular from "./friendModular";
import FriendAdd from "./friendAdd";
import FriendRecommend from "./friendRecommend";
import Machine from "./machine";
import Defense from "./defense";
import MyMachine from "./myMachine";



export default {
  components: {
    FriendModular,
    FriendAdd,
    FriendRecommend,
    Machine,
    Defense,
    MyMachine
  },
  data() {
    return {
      popupShow: false, // 弹框开关
      tarbarType: false, //  弹出那一个模块
      friends: 0, // 好友数量
      headerMsg: [
        { key: "矿机钱包", value: "0" },
        { key: "今日收益", value: "0" },
        { key: "有效矿机", value: "0" },
        { key: "算力", value: "0" }
      ]
    };
  },
  created() {},
  mounted() {
    this.getgame()
  },
  methods: {
    getgame: function () {
      this.token_post(this.$api.game_index, {
        type: 1
      })
        .then(data => {
          if (data.code == 200) {
            // if (data.data.ito_money) {
            //   this.headerMsg[0].value = data.data.ito_money
            // } else {

            // }
            this.headerMsg[0].value = data.data.ito_money ? data.data.ito_money :  0.0000
            this.headerMsg[1].value = data.data.today_money
            this.headerMsg[2].value = data.data.ito
            this.headerMsg[3].value = data.data.computing
            this.friends = data.data.friends
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    //根据tarbar弹出不同的内容
    tarPush(type) {
      this.$router.push(`/gameHome?tarbar=${type}`);
    },
    // 返回
    goBack() {
      this.$router.go(-1);
    },
    // 一键收取
    collect() {
      console.log("点击一键收取了");
    }
  },
  watch: {
    $route: {
      handler(newValue) {
        if (newValue.query.tarbar) {
          this.tarbarType = newValue.query.tarbar;
          !this.popupShow ? (this.popupShow = true) : null;
          return;
        }
        this.popupShow = false;
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.GameHome_box {
  display: flex;
  padding: 0.2rem 0 0.6rem 0;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background: url("../../assets/img/game/gameBgc.png") center center / 100% 100%
    no-repeat;
}
.headerMsg {
  display: flex;
  align-items: center;
  width: 92%;
  height: 1rem;
  background: url("../../assets/img/game/gameheaderBgc.png") center center /
    100% 100% no-repeat;
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
.gameMsg {
  flex: 1;
  width: 92%;
}
.gameMsg .goBack {
  width: 0.86rem;
  height: 0.92rem;
  margin-top: 0.3rem;
}
.gameTarbar {
  display: flex;
  align-items: center;
  height: 1rem;
  width: 100%;
}
.gameTarbar div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.gameTarbar div span {
  position: absolute;
  top: -0.1rem;
  right: 0.2rem;
  height: 0.3rem;
  background: #fd1a1a;
  border-radius: 0.15rem;
  padding: 0 0.1rem;
  font-size: 0.16rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 0.3rem;
}
.gameTarbar div img {
  height: 0.93rem;
}
.tarbarContentBox {
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: scroll;
}
.tarbarContentBox::-webkit-scrollbar {
  display: none;
}
</style>

<style scoped >
.van-popup--left {
  width: 100%;
  height: 100%;
}
</style>
