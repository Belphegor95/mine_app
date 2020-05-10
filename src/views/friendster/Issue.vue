<!-- 发布朋友圈 -->
<template>
  <div>
    <breadcrumb @is_manage="manage"></breadcrumb>
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
      fileList: []
    };
  },
  methods: {
    manage: function() {
      let arr = [];
      for (let i = 0; i < this.fileList.length; i++) {
        let item = this.fileList[i].content;
        arr.push(item);
      }
      if (this.content.trim() == "") {
        this.$toast("留言输入有误");
        return
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
        .catch(() => {this.$toast.fail(this.$api.monmsg)});
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
</style>