<!-- 矿机钱包记录 赏金钱包记录 -->
<template>
  <div class="moneyrecord">
    <breadcrumb></breadcrumb>
    <van-empty v-if="mycashlist.length == 0" description="暂无数据" />
    <van-list v-else v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell>
        <div class="biaoge_box">
          <span>收益时间</span>
          <span>收益数量</span>
          <span>收益来源</span>
        </div>
      </van-cell>
      <van-cell v-for="(item,idenx) in mycashlist" :key="idenx">
        <div class="biaoge_box">
          <span>{{ item.add_time }}</span>
          <span>{{ item.wa_num }}</span>
          <span>{{ item.wa_note }}</span>
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
      mycashlist: [],
      loading: false,
      finished: false,
      type: 1,
      page: 1
    };
  },
  mounted() {
    if (this.$store.getters.get_typeid == 10602) {
      this.type = 1;
    } else if (this.$store.getters.get_typeid == 10603) {
      this.type = 2;
    }
    this.getmycash();
  },
  methods: {
    getmycash: function() {
      this.loading = true;
      this.token_post(this.$api.user_mycash, {
        type: this.type,
        page: this.page
      })
        .then(data => {
          if (data.code == 200) {
            this.loading = false;
            this.mycashlist = this.mycashlist.concat(data.data);
            if (data.data.length != 10) {
              this.finished = true;
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {this.$toast.fail(this.$api.monmsg)});
    },
    onLoad() {
      this.page++;
      this.getmycash();
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 5; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.list.length >= 10) {
      //     this.finished = true;
      //   }
      // }, 1000);
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
  flex: 1;
  display: flex;
  justify-content: center;
}
.biaoge_box > span:nth-child(1) {
  flex: 1.3 !important;
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