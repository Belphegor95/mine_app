<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <breadcrumb></breadcrumb>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell>
        <ul class="contentList">
          <li v-for="(item,index)  in recommendlist" :key="index">
            <div>
              <!-- <img src="../../assets/img/game/manFriend.png" alt /> -->
              <img :src="$api.baseUrl + item.us_head_pic" alt />
              <div>
                <span>{{ item.us_nickname }}</span>
                <i>ID：{{ item.id }}</i>
              </div>
            </div>
            <button>
              <span>添 加</span>
            </button>
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
      nextTo: false,
      recommendlist: [],
      loading: false,
      finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 17801);
  },
  mounted() {
    this.getrecommend()
  },
  methods: {
    getrecommend: function () {
      this.token_post(this.$api.index_recommend)
        .then(data => {
          if (data.code === 200) {
            this.recommendlist = this.recommendlist.concat(data.data)
          } else {
            this.$toast(data.msg)
          }
        })
        .catch(() => {});
    },
    pushTo(type) {
      this.$router.push(`/gameHome?tarbar=${type}`);
    },
    onLoad() {
      this.getrecommend()
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
.contentList li > button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.5rem;
  width: 0.9rem;
  font-size: 0.26rem;
  font-family: PingFang;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  background: #398ef5;
  border-radius: 0.05rem;
  border: none;
}
.addFriend li div img {
  width: 0.6rem;
  margin-right: 0.28rem;
}
.contentList {
  width: 100%;
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

<style scoped >
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
