<!-- 广告 -->
<template>
  <div class="Advertising_box">
    <breadcrumb @is_manage="manage"></breadcrumb>
    <ul>
      <van-checkbox-group v-model="result" class="fuxuan_box">
        <li v-for="value  in 5" :key="value">
          <div class="img_"></div>
          <div class="xinxi_box">
            <p>奥克斯净水器</p>
            <div class="jilv_box">
              <van-checkbox v-if="!is_delet" :name="value"></van-checkbox>
              <div></div>
              <div class="shu_box">
                <img src="../../assets/img/personal/eyeimg.png" alt />
                <p>12</p>
              </div>
            </div>
          </div>
        </li>
      </van-checkbox-group>
    </ul>
    <div style="height:1.2rem;" ></div>
    <div class="queding_box">
      <van-button @click="rut_upadvertising" class="quedingbtn" type="info">上传广告</van-button>
    </div>
    <van-popup class="modal_box" v-model="modal">
      <h4>退出登录</h4>
      <p>您真的要退出登录吗</p>
      <div class="btn_box">
        <span @click="modal = false">取消</span>
        <span @click="quit">确定</span>
      </div>
    </van-popup>
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
      result: [1],
      is_delet: true,
      modal: false
    };
  },
  created() {
    this.$store.commit("show_typeid", 103);
  },
  methods: {
    rut_upadvertising: function() {
      this.$store.commit("show_typeid", 105);
      this.$router.push("/personal/up_advertising");
    },
    manage: function(is) {
      if (!is) {
        this.is_delet = is;
      } else {
        this.modal = true;
        // this.is_delet = is;
      }
    },
    quit: function() {
      this.modal = false;
    }
  }
};
</script>
<style scoped>
.Advertising_box {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  overflow-y: scroll;
}
.Advertising_box::-webkit-scrollbar{
  display: none;
}
ul {
  /* justify-content: space-around; */
}
.fuxuan_box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shu_box {
  display: flex;
  align-items: center;
}
.shu_box > img {
  height: 0.22rem;
}
.shu_box > p {
  margin-left: 0.08rem;
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}

/* 确定 */
.queding_box {
  position: fixed;
  left: 0;
  bottom: 0;
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

.modal_box {
  width: 80%;
  padding: 0 0.5rem;
  border-radius: 0.06rem;
}
.modal_box > h4 {
  font-size: 0.4rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 0.7rem;
  margin-top: 0.28rem;
}
.modal_box > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  line-height: 0.7rem;
  margin-bottom: 0.76rem;
}
.modal_box .btn_box {
  font-size: 0.3rem;
  font-family: PingFang;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 0.7rem;
  margin-bottom: 0.28rem;
  height: 0.7rem;
}
.modal_box .btn_box > span {
  margin-left: 0.78rem;
  float: right;
  box-sizing: border-box;
}
</style>
