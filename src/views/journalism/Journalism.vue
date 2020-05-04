<!-- 新闻快讯 -->
<template>
  <div class="Journalism">
    <breadcrumb></breadcrumb>
    <ul>
      <li @click="rut_push(news.id)" v-for="(news,index) in newslist" :key="index">
        <p v-text="news.title"></p>
        <div v-text="news.add_time"></div>
      </li>
      <!-- <li @click="rut_push">
        <p>NCK 2小时内快速拉升 涨破22美元，NCK 2小时内快速拉升 涨破22 美元，阿第三方科技爱的色放Joe啦地方</p>
        <div>2019-12-12 12:00:00</div>
      </li>
      <li>
        <p>NCK 2小时内快速拉升 涨破22美元，NCK 2小时内快速拉升 涨破22 美元，阿第三方科技爱的色放Joe啦地方</p>
        <div>2019-12-12 12:00:00</div>
      </li>
      <li>
        <p>NCK 2小时内快速拉升 涨破22美元，NCK 2小时内快速拉升 涨破22 美元，阿第三方科技爱的色放Joe啦地方</p>
        <div>2019-12-12 12:00:00</div>
      </li> -->
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
      newslist: [] 
    };
  },
  mounted() {
    this.getNewslist();
  },
  methods: {
    getNewslist: function() {
      this.axios
        .get(this.$api.index_newslist, {})
        .then((data) => {
          if (data.code === 200) {
            this.newslist = data.data
          } else {
            this.$toast(data.msg)
          }
        })
        .catch(() => {});
    },
    rut_push: function() {
      this.$router.push("/journalism/details");
    }
  }
};
</script>
<style scoped>
.Journalism {
  height: 100%;
  background: rgba(241, 241, 241, 1);
}
ul {
  background-color: #fff;
}
li {
  border-bottom: 1px solid #f1f1f1ff;
}
li > p {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 0.3rem;

  padding: 0.29rem 0.61rem 0.25rem 0.51rem;
}
li > div {
  font-size: 0.2rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  /* line-height: 0.7rem; */

  text-align: right;
  padding-right: 0.5rem;
  padding-bottom: 0.19rem;
}
</style>