<!-- 分享 -->
<template>
  <div class="share_box">
    <breadcrumb :typeid="104"></breadcrumb>
    <div></div>
    <p>
      http://www.baidu.com
      <br />ajskdjfkasjdklfjasdklfjdasfkldasasf
      <br />kjjskf
    </p>
    <div class="fuzhi_box">
      <van-button class="fuzhibtn" type="default">复制地址</van-button>
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
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
.share_box {
  position: relative;
  height: 100%;
  background-image: url("../../assets/img/personal/sharingimg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.share_box p {
  font-size: 0.36rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  text-align: center;
  position: absolute;
  top: 8.3rem;
}
.fuzhi_box {
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  top: 10rem;
}
.fuzhibtn {
  width: 3rem;
  height: 0.8rem;
  font-size: 0.36rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
</style>