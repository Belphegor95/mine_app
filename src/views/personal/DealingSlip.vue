<!-- 交易单 -->
<template>
  <div class="DealingSlip_box">
    <breadcrumb></breadcrumb>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell>
        <div class="liebiao_box">
          <div class="zhuangtai_box">
            <p>状态</p>
            <p>对方ID</p>
            <p>交易金额</p>
            <p>交易时间</p>
          </div>
          <div class="xinxi_box">
            <p class="blue">待您付款</p>
            <p>126854</p>
            <p>8000.00</p>
            <p>2018-08-08 24:00:00</p>
          </div>
        </div>
      </van-cell>
      <van-cell>
        <div class="liebiao_box">
          <div class="zhuangtai_box">
            <p>状态</p>
            <p>对方ID</p>
            <p>交易金额</p>
            <p>交易时间</p>
          </div>
          <div class="xinxi_box">
            <p class="red">待对方付款</p>
            <p>126854</p>
            <p>8000.00</p>
            <p>2018-08-08 24:00:00</p>
          </div>
        </div>
      </van-cell>
      <van-cell v-for="item in list" :key="item">
        <div class="liebiao_box">
          <div class="zhuangtai_box">
            <p>状态</p>
            <p>对方ID</p>
            <p>交易金额</p>
            <p>交易时间</p>
          </div>
          <div class="xinxi_box">
            <p >交易完成</p>
            <p>126854</p>
            <p>8000.00</p>
            <p>2018-08-08 24:00:00</p>
          </div>
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
  created() {
    this.$store.commit("show_typeid", 102);
  },
  mounted() {
    
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
<style scoped>
.liebiao_box {
  display: flex;
}
.liebiao_box > div {
  flex: 0 0 50%;
}
.zhuangtai_box {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  /* line-height: 0.45rem; */
}
.liebiao_box > div > p:nth-child(1) {
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin: 0.13rem 0;
}
.xinxi_box {
  text-align: right;
}
.blue {
  color: #398EF5!important;
}
.red {
  color: #FD1A1A!important;
}
</style>

<style >
.DealingSlip_box .van-cell {
  padding: 0.23rem 0.29rem 0.3rem 0.3rem !important;
}
</style>
