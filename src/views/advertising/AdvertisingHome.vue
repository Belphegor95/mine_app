<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <!-- <breadcrumb></breadcrumb> -->
    <div class="headers">
      <img src="../../assets/img/backimg.png" @click="()=>$router.go(-1)" alt />
      <div>
        <button class="active" >
          <span>任务大厅</span>
        </button>
        <button  @click="()=>$toast('暂未开放')" >
          <span>赏金广告</span>
        </button>
      </div>
      <span></span>
    </div>
    <van-tabs v-model="cate_index" @click="getadvertDetail">
      <van-tab v-for="(item,index) in cates" :key="index" :title="item.ca_name">
        <van-empty style="background-color: #fff" v-if="list.length == 0" description="暂无数据" />
        <ul class="list">
          <li v-for="(item,index)  in list" :key="index">
            <!-- <div class="img_"></div> -->
            <img class="img_" :src="$api.baseUrl + item.ad_head_pic" @click="onvideo(item)" />
            <div class="xinxi_box">
              <p>{{ item.ad_name }}</p>
              <div class="jilv_box">
                <img src="../../assets/img/personal/eyeimg.png" alt />
                <p>{{ item.skim? item.skim: 0 }}</p>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import breadcrumb from "@/components/breadcrumb";
export default {
  // components: {
  //   breadcrumb
  // },
  data() {
    return {
      activeName: "",
      tarbarTitile: "",
      list: [],
      loading: false,
      finished: false,
      cates: [], //广告标签
      cate_index: 0 //选中的广告标签
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
          if (data.code == 200) {
            this.cates = data.data.cates;
            this.getadvertDetail();
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    getadvertDetail: function() {
      this.axios
        .post(this.$api.index_advert, {
          ca_id: this.cates[this.cate_index].id
        })
        .then(data => {
          if (data.code == 200) {
            this.list = data.data;
            // this.cates = data.data.cates
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    onvideo: function(item) {
      this.$router.push({
        path: "/videoPlayback",
        query: item
      });
    }
  }
};
</script>
<style scoped >
.AdvertisingHome_box {
  height: 100%;
  background-color: #f7f7f7;
}
.AdvertisingHome_box .headers {
  height: 2rem;
  width: 100%;
  background: #398ef5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.6rem 0.3rem 0.86rem 0.3rem; */
  padding: 0.3rem 0.3rem 0.86rem 0.3rem;
  box-sizing: border-box;
}
.AdvertisingHome_box .headers img {
  height: 0.4rem;
}
.AdvertisingHome_box .headers div {
  width: 4rem;
  height: 0.6rem;
  background: white;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  padding: 0.04rem;
  box-sizing: border-box;
}
.AdvertisingHome_box .headers button {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .32rem;
  color: #398EF5;
  background: transparent;
  border: none;
  border-radius: .3rem;
}
.AdvertisingHome_box .headers .active {
  background: #398EF5;
  color: white;
}
.AdvertisingHome_box .van-tabs {
  margin-top: -0.6rem;
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
  display: flex;
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
