<!-- 新闻详情 -->
<template>
  <div class="Details">
    <breadcrumb></breadcrumb>
    <div class="xiangqing">
      <h2>BTT、ETT两大币种24小时资金净流入 突破17亿人民币</h2>
      <div>2019-12-12 12:00:00</div>
      <p>上周日，比特币升至5200美元水平。之后略有下降，并回到5000美元附近，似乎涨势似乎已经结束，但是现在看来，在面临任何重大阻</p>
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
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.Details{
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
}
.Details::-webkit-scrollbar{
  display: none;
}
.xiangqing {
  padding: 0.26rem 0.65rem 0 0.5rem;
}
.xiangqing > h2 {
  font-size: 0.36rem;
  font-family: PingFang;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 0.38rem;
}
.xiangqing > div {
  font-size: 0.2rem;
  font-family: PingFang;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  line-height: 0.7rem;
}
.xiangqing > p {
  font-size: 0.26rem;
  font-family: PingFang;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 0.38rem;
}
</style>