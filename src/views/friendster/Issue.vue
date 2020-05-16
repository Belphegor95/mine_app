<!-- 发布朋友圈 -->
<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="right_box">
      <p @click="manage">发布</p>
    </div>
    <van-field
      class="shuru"
      v-model="content"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
    />
    <div class="tu_box">
      <van-uploader v-model="fileList" multiple accept="image/*" />
      <!-- <img src="../../assets/img/friendster/____1.png" alt />
      <img src="../../assets/img/friendster/____1.png" alt />
      <img src="../../assets/img/friendster/____1.png" alt />
      <img src="../../assets/img/personal/upimg.png" alt />-->
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
    return {
      content: "",
      fileList: [],
      sensitive: [] //关键字
    };
  },
  mounted() {
    this.getsensitive();
  },
  methods: {
    getsensitive: function() {
      this.axios
        .get(this.$api.index_sensitive)
        .then(data => {
          if (data.code == 200) {
            this.sensitive = data.data;
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    manage: function() {
      let arr = [];
      for (let i = 0; i < this.fileList.length; i++) {
        let item = this.fileList[i].content;
        arr.push(item);
      }
      if (this.content.trim() == "") {
        this.$toast("留言输入有误");
        return;
      }
      if (
        this.sensitive.some(item => {
          if (this.content.indexOf(item) != -1) {
            return true;
          }
        })
      ) {
        this.$toast("输入内容包含敏感词汇,请重新输入");
        return;
      }
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.friend_add, {
        content: this.content,
        pic: arr
      })
        .then(data => {
          if (data.code == 200) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                this.$router.go(-1);
              }
            });
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
.shuru {
  border-bottom: 1px solid #f7f7f7ff;
  min-height: 2.4rem;
}
.tu_box {
  display: flex;
  padding: 0.4rem;
}
.tu_box > img {
  flex: 0 0 24%;
}
img {
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.1rem;
}
.right_box {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 0.3rem 0.27rem;
}
</style>