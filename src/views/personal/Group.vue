<!-- 我的团队 -->
<template>
  <div>
    <breadcrumb :typeid="101"></breadcrumb>
    <!-- <ul>
      <li>
        <span>会员账号</span>
        <span>级别</span>
        <span>直推人数</span>
        <span>团队人数</span>
      </li>
      <li>
        <span>246213</span>
        <span>普通朋友</span>
        <span>20</span>
        <span>200</span>
      </li>
      <li>
        <span>246213</span>
        <span>普通朋友</span>
        <span>20</span>
        <span>200</span>
      </li>
      <li>
        <span>246213</span>
        <span>普通朋友</span>
        <span>20</span>
        <span>200</span>
      </li>
      <li>
        <span>246213</span>
        <span>普通朋友</span>
        <span>20</span>
        <span>200</span>
      </li>
      <li>
        <span>246213</span>
        <span>普通朋友</span>
        <span>20</span>
        <span>200</span>
      </li>
    </ul>-->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell>
        <div class="biaoge_box">
          <span>会员账号</span>
          <span>级别</span>
          <span>直推人数</span>
          <span>团队人数</span>
        </div>
      </van-cell>
      <van-cell v-for="item in list" :key="item">
        <div class="biaoge_box">
          <span>246213</span>
          <span>普通朋友</span>
          <span>20</span>
          <span>200</span>
        </div>
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
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
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
<style scoped>
.biaoge_box {
  display: flex;
}
.biaoge_box > span {
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
}
</style>

<style>
.biaoge_box .van-cell:nth-of-type(even) {
  background: #fafafa;
}
</style>