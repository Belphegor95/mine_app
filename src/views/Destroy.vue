<!-- 我的钱包 -->
<template>
  <div class="burse_box">
    <breadcrumb></breadcrumb>
    <div class="qian_box">
      <div>
        <p>已发行</p>
        <p>{{ statistics.sum1? statistics.sum1: 0.0000 }}</p>
      </div>
      <div>
        <p>已销毁</p>
        <p>{{ statistics.sum2? statistics.sum2:0.0000 }}</p>
      </div>
    </div>
    <ul>
      <li>
        <span>销毁时间</span>
        <span>销毁数量</span>
      </li>
      <li v-for="(item,index) in statistics.list" :key="index">
        <span>{{ item.end_time }}</span>
        <span>{{ item.fee }}</span>
      </li>
    </ul>
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
      statistics: {}
    };
  },
  created() {
    this.$store.commit("show_typeid", 801);
  },
  mounted() {
    this.getstatistics();
  },
  methods: {
    getstatistics: function() {
      this.token_get(this.$api.index_statistics)
        .then(data => {
          if (data.code == 200) {
            this.statistics = data.data;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    }
  }
};
</script>
<style scoped>
.burse_box {
  height: 100%;
  background-color: #f7f6f9;
}
.qian_box {
  display: flex;
  height: 1.6rem;
  align-items: center;
  background-color: #fff;
}
.qian_box > div {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qian_box > div > p:nth-child(1) {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.qian_box > div > p:nth-child(2) {
  font-size: 0.4rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.22rem;
}

ul {
  margin-top: 0.2rem;
  background-color: #fff;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
li {
  height: 1rem;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
li > span {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
li:nth-of-type(even) {
  background: #fafafa;
}
</style>