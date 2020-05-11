<!-- 交易单 -->
<template>
  <div class="GameHome_box">
    <!-- 头部信息展示部分 -->
    <header v-show="!isFriend" class="headerMsg">
      <div v-for="(item,index) in headerMsg" :key="index">
        <span v-text="item.value"></span>
        <span v-text="item.key"></span>
      </div>
    </header>
    <!-- 游戏内贴图 -->
    <main class="gameMsg">
      <!-- 返回 -->

      <img
        v-if="isFriend"
        src="../../assets/img/game/gameGoback.png"
        class="goBack"
        @click="()=>isFriend = false"
      />

      <img v-else src="../../assets/img/game/gameGoback.png" alt class="goBack" @click="goBack" />

      <ul class="gameBiMsg" v-if="isFriend">
        <li
          v-for="(item,index) in friendBilist&&friendBilist.length>0?friendBilist:''"
          :key="index"
          :style="{left:listPosition[index].left,top:listPosition[index].top}"
          @click="toukuang(item.id,item.num)"
        >
          <img src="../../assets/img/game/bi1.png" alt />
        </li>
      </ul>
      <ul class="gameBiMsg" v-else>
        <li
          v-for="(item,index) in gameMsg.produce"
          :key="index"
          :style="{left:listPosition[index].left,top:listPosition[index].top}"
        >
          <img src="../../assets/img/game/bi1.png" alt />
        </li>
      </ul>
      <!-- 狗 -->
      <img
        v-show="!isFriend"
        v-if="gameMsg.prevent&&gameMsg.prevent.length>0"
        src="../../assets/img/game/dog.png"
        class="dog"
      />
      <!-- 旷工带机器 -->
      <img
        v-if="lv == 1&&!isFriend"
        src="../../assets/img/game/lv1.png"
        style="left: 24%;top: 65%;height: 18%;}"
        class="man"
      />
      <img
        v-else-if="lv == 2&&!isFriend"
        src="../../assets/img/game/lv2.png"
        style="left: 24%;top: 65%;height: 18%;}"
        class="man"
      />
      <img
        v-else-if="lv == 3&&!isFriend"
        src="../../assets/img/game/lv3.png"
        style="left: 16%;top: 65%;height: 18%;"
        class="man"
      />
      <img
        v-else-if="lv == 4&&!isFriend"
        src="../../assets/img/game/lv4.png"
        style="left: 29%;top: 66%;height: 13%;"
        class="man"
      />
      <img
        v-else-if="lv == 5&&!isFriend"
        src="../../assets/img/game/lv5.png"
        style="left: 29%;top: 66%;height: 13%;"
        class="man"
      />
    </main>
    <!-- 底部导航部分 -->
    <footer class="gameTarbar" v-show="!isFriend">
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
        <FriendModular :config="fricenConfig" v-if="tarbarType == 1" />
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
      ],
      lv: 0,
      gameMsg: {}, // 游戏信息
      listPosition: [
        { left: 0, top: 0 },
        { left: "1rem", top: "1rem" },
        { left: 0, top: "1.2rem" },
        { left: "1.2rem", top: 0 },
        { left: "2.3rem", top: "1.2rem" },
        { left: "0.5rem", top: "2rem" },
        { left: "3rem", top: 0 },
        { left: "2rem", top: "2rem" },
        { left: "2rem", top: "-1rem" }
      ],
      isFriend: false,
      friendBilist: [],
      fricenConfig: {
        success: res => this.gerFirendBiList(res)
      },
      firednId: ""
    };
  },
  created() {},
  mounted() {
    this.getgame();
    this.getgame2();
  },
  methods: {
     // 获取头部信息
    getgame: function() {
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
     // 获取矿机等级
    getgame2: function() {
      this.token_post(this.$api.game_index, {
        type: 2
      })
        .then(data => {
          if (data.code === 200) {
            var lv = 0;
            data.data && data.data.usito && data.data.usito.length > 0
              ? data.data.usito.forEach(item => {
                  item.level > lv ? (lv = item.level) : null;
                })
              : null;
            this.lv = lv;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    // 获取好友的信息
    gerFirendBiList(res) {
      let id = "";
      if (res) {
        id = res.id;
        this.firednId = res.id;
        this.$router.go(-1)
      } else {
        id = this.firednId;
      }
      this.token_post(this.$api.game_showfriends, {
        id
      })
        .then(data => {
          if (data.code === 200) {
            // 好友的币的列表
            this.friendBilist = data.data;
            // 是正常home页  还是好友的矿场页开关
            this.isFriend = true;
            this.tarbarType = false;
            this.popupShow = false;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },

    toukuang(id, num) {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.game_steal, {
        id,
        num
      })
        .then(data => {
          if (data.code === 200) {
            this.$toast({
              forbidClick: true,
              message: data.msg,
              onClose: () => {
                this.gerFirendBiList();
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast("请求异常");
        });
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
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.game_harvest)
        .then(data => {
          if (data.code === 200) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                this.getgame();
                this.getgame2();
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast("请求异常");
        });
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
.gameBiMsg {
  position: absolute;
  right: 26%;
  top: 18%;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.gameBiMsg li {
  position: absolute;
  width: 0.92rem;
  height: 0.92rem;
  margin: 0.04rem;
  background: url("../../assets/img/game/bi2.png") center center / 100% 100%
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gameBiMsg li img {
  display: block;
  width: 60%;
  height: 60%;
}
.man {
  position: absolute;
  left: 28%;
  top: 63%;
  height: 20%;
}
.dog {
  position: absolute;
  height: 15%;
  left: 67%;
  top: 34%;
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
