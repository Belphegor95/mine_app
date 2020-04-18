<!-- 广告视频区 -->
<template>
  <div class="VideoPlayback_box">
    <breadcrumb></breadcrumb>
    <div id="dplayer"></div>
    <van-popup :overlay-style="{background:'transparent'}" position="bottom" v-model="show">
      <div class="explain">1231231</div>
    </van-popup>
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
      show: true,
      dp: null
    };
  },
  created() {
    this.$store.commit("show_typeid", 177);
  },
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById("dplayer"),
      lang: "zh-cn",
      autoplay: false,
      video: {
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        pic:
          "https://www.baidu.com/img/pcpad_e247c0f9a461b6394da20e308588818f.png"
        // type: 'hls'
      },
      player: null
    });
    this.dp = dp;
  },
  methods: {}
};
</script>
<style scoped >
.VideoPlayback_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#dplayer {
  flex: 1;
}
.explain {
  width: 100%;
  height: 2.2rem;
  background: rgba(0, 0, 0, 0.3);
}
.van-popup {
  width: 100% !important;
  background-color:transparent!important;
}
</style>

<style >
.dplayer-controller-mask,
.dplayer-controller {
  display: none !important;
}
</style>
