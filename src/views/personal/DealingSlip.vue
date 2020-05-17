<!-- 交易单 -->
<template>
  <div class="DealingSlip_box">
    <breadcrumb></breadcrumb>
    <van-empty v-if="mytradelist.length == 0" description="暂无数据" />
    <van-list v-else v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,index) in mytradelist" :key="index">
        <div class="liebiao_box" @click="rut(item)">
          <div class="zhuangtai_box">
            <p>状态</p>
            <p>对方ID</p>
            <p>交易金额</p>
            <p>交易时间</p>
          </div>
          <div class="xinxi_box">
            <p v-if="item.status == 0 && user.id == item.st_id" class="gray">待交易</p>
            <p v-else-if="item.status == 1 " class="red">{{ user.id == item.st_id?"待对方付款":"待上传凭证" }}</p>
            <p v-else-if="item.status == 2" class="blue">{{ user.id == item.st_id?"待您审核":"待对方审核" }}</p>
            <p v-else-if="item.status == 3">交易完成</p>
            <p v-if="item.us_id ">{{ item.us_id }}</p>
            <p v-else>暂无</p>
            <p>{{ item.price }}</p>
            <p>{{ item.add_time }}</p>
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
      user: this.$store.state.user,
      mytradelist: [],
      page: 1,
      loading: false,
      finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 102);
  },
  mounted() {
    this.getmytrade();
  },
  methods: {
    getmytrade: function() {
      this.loading = true;
      this.token_post(this.$api.trade_mytrade, { page: this.page })
        .then(data => {
          if (data.code == 200) {
            this.mytradelist = this.mytradelist.concat(data.data);
            this.loading = false;
            if (data.data.length != 10) {
              this.finished = true;
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    rut: function(item) {
      this.$router.push({
        path: "/deal/particulars",
        query: item
      });
    },
    onLoad() {
      this.page++;
      this.getmytrade();
    }
  }
};
</script>
<style scoped>
.liebiao_box {
  display: flex;
  width: 100%;
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
  color: #398ef5 !important;
}
.red {
  color: #fd1a1a !important;
}
.gray {
  color: #aaa !important;
}
</style>

<style >
.DealingSlip_box .van-cell {
  padding: 0.23rem 0.29rem 0.3rem 0.3rem !important;
}
</style>
