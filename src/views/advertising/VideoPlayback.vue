<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <breadcrumb></breadcrumb>
    <div id="dplayer"></div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";
export default {
  components: {
    breadcrumb
  },
  data() {
    return {
      activeName: "",
      tarbarTitile: "",
      list: [],
      loading: false,
      finished: false,
      dp: null
    };
  },
  created() {
    this.$store.commit("show_typeid", 177);
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer"),
      video: {
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      }
    });
    this.dp = dp;
  },
  methods: {
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.list {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.list li {
  flex: 0 0 46%;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  overflow: hidden;
}
.list .img_ {
  width: 100%;
  height: 3.5rem;
  background-color: #eeeeee;
}
.list .xinxi_box {
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 0.1rem 0.22rem 0.16rem 0.2rem;
}
.list .xinxi_box > p {
  font-size: 0.24rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.list .jilv_box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.list .jilv_box > img {
  height: 0.22rem;
}
.list .jilv_box > p {
  margin-left: 0.08rem;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
</style>

<style >
.van-tabs__nav {
  background: #f7f7f7 !important;
}
.van-tabs__line {
  bottom: 0.4rem !important;
}
</style>
