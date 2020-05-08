<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <breadcrumb></breadcrumb>
    <van-tabs v-model="cate_index" @click="getadvertDetail">
      <van-tab v-for="(item,index) in cates" :key="index" :title="item.ca_name">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell>
            <ul class="list">
              <li v-for="value  in list" :key="value">
                <div class="img_"></div>
                <div class="xinxi_box">
                  <p>奥克斯净水器</p>
                  <div class="jilv_box">
                    <img src="../../assets/img/personal/eyeimg.png" alt />
                    <p>12</p>
                  </div>
                </div>
              </li>
            </ul>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
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
      activeName: "",
      tarbarTitile: "",
      list: [],
      loading: false,
      finished: false,
      cates: [], //广告标签
      cate_index: 0, //选中的广告标签
    };
  },
  created() {
    this.$store.commit("show_typeid", 177);
  },
  mounted() {
    this.getcates();
  },
  methods: {
    getcates: function() {
      this.axios
        .get(this.$api.index_cates)
        .then(data => {
          if (data.code === 200) {
            this.cates = data.data.cates;
            this.getadvertDetail()
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    getadvertDetail: function () {
      this.axios
        .post(this.$api.index_advertDetail,{
          id: this.cates[this.cate_index].id
        })
        .then(data => {
          if (data.code === 200) {
            // this.cates = data.data.cates
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
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
