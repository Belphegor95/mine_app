<!-- 我的团队 -->
<template>
  <div class="Group">
    <breadcrumb :typeid="101"></breadcrumb>
    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
    <!-- <van-cell> -->
    <div class="biaoge_box">
      <span>会员账号</span>
      <span>级别</span>
      <span>直推人数</span>
      <span>团队人数</span>
    </div>
    <!-- </van-cell> -->
    <div class="biaoge_box" v-for="(item,index) in myTeamlist" :key="index">
      <span>{{ item.us_account }}</span>
      <span>{{ item.us_nickname }}</span>
      <span>{{ item.first }}</span>
      <span>{{ item.teams }}</span>
    </div>
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
      myTeamlist: [],
      loading: false,
      finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 101);
  },
  mounted() {
    this.getmyTeam();
  },
  methods: {
    getmyTeam: function() {
      this.token_post(this.$api.user_myTeam)
        .then(data => {
          if (data.code === 200) {
            // console.info(data)
            this.myTeamlist = data.data;
          }
        })
        .catch(() => {});
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 5; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 20) {
      //     this.finished = true;
      //   }
      // }, 1000);
    }
  }
};
</script>
<style scoped>
.biaoge_box {
  display: flex;
  height: 0.8rem;
  justify-content: center;
  align-items: center;
  /* background: rgba(250, 250, 250, 1); */
}
.biaoge_box > span {
  font-size: 0.24rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
}
</style>

<style>
.biaoge_box:nth-of-type(even) {
  background: #fafafa;
}
.Group:nth-of-type(even) {
  background: #fafafa;
}
.Group:not(:last-child)::after {
  border: none !important;
}
</style>