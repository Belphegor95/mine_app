<!-- 分享 -->
<template>
  <div class="share_box">
    <breadcrumb :typeid="104" :transparent="true"></breadcrumb>
    <img class="imgrcode" style="width: 62%;" :src="jrQrcode.getQrBase64(url)" alt />
    <p id="biao1">{{url}}</p>
    <div class="fuzhi_box">
      <van-button class="fuzhibtn" @click="doCopy" type="default">复制地址</van-button>
    </div>
    <input id="fzlj" type="text" :value="url" readonly="readOnly" style=" opacity: 0 " />
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb";
import jrQrcode from "jr-qrcode";
export default {
  components: {
    breadcrumb
  },
  data() {
    return {
      jrQrcode,
      url: `http://121.89.215.118:8080/register?id=${this.$store.state.user.us_tel}`,
      message: "Copy These Text"
    };
  },
  mounted() {
    this.$store.commit("show_typeid", 104);
  },
  methods: {
    doCopy: function() {
      document.querySelector("#fzlj").select();
      document.execCommand("Copy");
      this.$toast.success("复制链接成功");
      // this.dataProcessing(val);
      // this.$copyText(this.message).then(
      //   function(e) {
      //     alert("Copied");
      //     console.log(e);
      //   },
      //   function(e) {
      //     alert("Can not copy");
      //     console.log(e);
      //   }
      // );
    }
  }
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
  line-height: 0.8rem;
  font-size: 0.36rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.imgrcode {
  position: absolute;
  top: 2.6rem;
  left: 1.4rem;
}
</style>