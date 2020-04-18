<!-- 发布朋友圈 -->
<template>
  <div>
    <breadcrumb @is_manage="manage"></breadcrumb>
    <van-field
      class="shuru"
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
    />
    <div class="tu_box">
      <img src="../../assets/img/friendster/____1.png" alt />
      <img src="../../assets/img/friendster/____1.png" alt />
      <img src="../../assets/img/friendster/____1.png" alt />
      <img src="../../assets/img/personal/upimg.png" alt />
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
      message: ""
    };
  },
  methods: {
    manage: function(is) {
      console.info(is);
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
</style>