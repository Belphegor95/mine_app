<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <breadcrumb></breadcrumb>
    <van-tabs>
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell>
            <ul class="list" >
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
      finished: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 177);
  },
  mounted() {},
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
<style scoped >
.AdvertisingHome_box {
}
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
