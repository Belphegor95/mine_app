<!-- 广告 -->
<template>
  <div class="Advertising_box">
    <breadcrumb :typeid="103"></breadcrumb>
    <ul>
      <li v-for="value  in 5" :key="value">
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
    <div class="queding_box">
      <van-button @click="rut_upadvertising" class="quedingbtn" type="info">上传广告</van-button>
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
  methods: {
    rut_upadvertising: function() {
      this.$store.commit("show_typeid", 105);
      this.$router.push("/personal/up_advertising")
    }
  }
};
</script>
<style scoped>
.Advertising_box {
  height: 100%;
  background-color: #f7f7f7;
}
ul {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
li {
  flex: 0 0 46%;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  overflow: hidden;
}
.img_ {
  width: 100%;
  height: 3.5rem;
  background-color: #eeeeee;
}
.xinxi_box {
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 0.1rem 0.22rem 0.16rem 0.2rem;
}
.xinxi_box > p {
  font-size: 0.24rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.jilv_box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jilv_box > img {
  height: 0.22rem;
}
.jilv_box > p {
  margin-left: 0.08rem;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}

/* 确定 */
.queding_box {
  width: 100%;
  height: 0.98rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quedingbtn {
  width: 6rem;
  height: 0.7rem;
  border-radius: 0.35rem;
}
</style>
