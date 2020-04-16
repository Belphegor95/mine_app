<!-- 矿机钱包记录 商务钱包记录 -->
<template>
  <div class="moneyrecord">
    <breadcrumb></breadcrumb>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell>
        <div class="biaoge_box">
          <span>收益时间</span>
          <span>收益数量</span>
          <span>收益来源</span>
        </div>
      </van-cell>
      <van-cell v-for="item in list" :key="item">
        <div class="biaoge_box">
          <span>10-10 24:00:00</span>
          <span>+20.00</span>
          <span>团队奖励</span>
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
        if (this.list.length >= 10) {
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
  font-size: 0.24rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  flex: 0 0 33%;
  display: flex;
  justify-content: center;
}
</style>

<style>
.moneyrecord .biaoge_box .van-cell:nth-of-type(even) {
  background: #fafafa;
}
.moneyrecord .biaoge_box .van-cell:not(:last-child)::after {
  border: none !important;
}
</style>