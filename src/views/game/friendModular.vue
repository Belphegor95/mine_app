<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <breadcrumb></breadcrumb>
    <ul class="addFriend">
      <li @click="pushTo(101)" >
        <div>
          <img src="../../assets/img/game/add.png" alt />
          <span>添加好友</span>
        </div>
        <img src="../../assets/img/game/go.png" alt />
      </li>
      <li @click="pushTo(102)" >
        <div>
          <img src="../../assets/img/game/add.png" alt />
          <span>好友推荐</span>
        </div>
        <img src="../../assets/img/game/go.png" alt />
      </li>
    </ul>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell>
        <ul class="contentList">
          <li v-for="value  in list" :key="value">
            <div>
              <img src="../../assets/img/game/manFriend.png" alt />
              <div>
                <span>雷厉风行</span>
                <i>ID：215472</i>
              </div>
            </div>
            <img src="../../assets/img/game/gameTar5.png" alt />
          </li>
        </ul>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
export default {
  components: {
    breadcrumb
  },
  data() {
    return {
      nextTo:false,
      list: [],
      loading: false,
      finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 17801);
  },
  mounted() {},
  methods: {
    pushTo(type){
       this.$router.push(`/gameHome?tarbar=${type}`);
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
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
.AdvertisingHome_box {
  background: #f7f7f7;
}
.addFriend {
  width: 100%;
  margin: 0.06rem auto;
  margin-bottom: 0.1rem;
}
.addFriend li {
  width: 100%;
  height: 1.2rem;
  margin-bottom: 2px;
  padding: 0 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
}
.addFriend li div {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.addFriend li > img {
  height: 0.38rem;
}
.addFriend li div img {
  width: 0.6rem;
  margin-right: 0.28rem;
}
.contentList {
  width: 100%;
  background: #f7f7f7;
}
.contentList li {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.38rem 0 0.5rem;
  box-sizing: border-box;
  margin-bottom: 2px;
}
.contentList li > img {
  height: 0.68rem;
}
.contentList li > div {
  display: flex;
  align-items: center;
}
.contentList li > div img {
  width: 1rem;
  margin-right: 0.36rem;
}
.contentList li > div div {
  display: flex;
  flex-direction: column;
}
.contentList li > div div span {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.contentList li > div div i {
  font-style: normal;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
</style>

<style  scoped>
.van-tabs__nav {
  background: #f7f7f7 !important;
}
.van-cell {
  padding: 0 !important;
}
.van-tabs__line {
  bottom: 0.4rem !important;
}
</style>
