<!-- 广告视频区 -->
<template>
  <div class="AdvertisingHome_box">
    <breadcrumb></breadcrumb>
    <van-search v-model="searchValue" show-action placeholder="请输入好友手机号" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="searchEnd">搜索结果</div>
    <!-- <van-empty style="background-color: #fff;"  description="暂无数据" /> -->
    <ul class="contentList" v-if="Object.keys(adduser).length != 0" >
      <li>
        <div>
          <img :src="$api.baseUrl + adduser.us_head_pic" alt />
          <div>
            <span>{{ adduser.us_nickname }}</span>
            <i>ID：{{ adduser.id }}</i>
          </div>
        </div>
        <button @click="addfriend(adduser.id)">
          <span>添 加</span>
        </button>
      </li>
    </ul>
    <!-- </van-cell>
    </van-list>-->
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
      searchValue: "",
      list: [],
      adduser: {}
    };
  },
  created() {
    this.$store.commit("show_typeid", 17802);
  },
  mounted() {},
  methods: {
    addfriend: function(id) {
      this.token_post(this.$api.user_addfriend, { id: id })
        .then(data => {
          if (data.code === 200) {
            this.$toast(data.msg);
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    pushTo(type) {
      this.$router.push(`/gameHome?tarbar=${type}`);
    },
    // 搜索
    onSearch() {
      if (this.searchValue === "") {
        this.$toast("搜索关键词输入有误");
        return;
      }
      this.axios
        .post(this.$api.index_search, {
          id: this.searchValue
        })
        .then(data => {
          if (data.code === 200) {
            this.adduser = data.data;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped >
.AdvertisingHome_box {
  background: #f7f7f7;
}
.searchEnd {
  width: 100%;
  height: 0.76rem;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin-left: 0.3rem;
  line-height: 0.76rem;
}
.contentList {
  width: 100%;
  background: #f7f7f7;
}
.contentList li {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.38rem 0 0.5rem;
  box-sizing: border-box;
  margin-bottom: 2px;
}
.contentList li > button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.5rem;
  width: 0.9rem;
  font-size: 0.26rem;
  font-family: PingFang;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  background: #398ef5;
  border-radius: 0.05rem;
  border: none;
}
.contentList li > div {
  display: flex;
  align-items: center;
}
.contentList li > div img {
  width: 1rem;
  margin-right: 0.36rem;
}
.contentList li > div div {
  display: flex;
  flex-direction: column;
}
.contentList li > div div span {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.contentList li > div div i {
  font-style: normal;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}
</style>

<style scoped >
.van-tabs__nav {
  background: #f7f7f7 !important;
}
.van-cell {
  padding: 0 !important;
}
.van-tabs__line {
  bottom: 0.4rem !important;
}
.van-search {
  height: 1rem;
}
.van-search input {
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.van-icon {
  font-size: 20px !important;
}
.van-search__action {
  margin-right: 0.2rem;
}
</style>
