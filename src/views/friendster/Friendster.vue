<!-- 朋友圈 -->
<template>
  <div class="Friends" >
    <breadcrumb @is_manage="manage"></breadcrumb>
    <div class="topbtn_box">
      <span class="blue">文字</span>
      <span>视频</span>
    </div>
    <ul>
      <li>
        <img src="../../assets/img/friendster/userimg.png" alt />
        <div class="neirong_box">
          <p>雷厉风行</p>
          <p>今天赚了不少真的挺开心，今天赚了不少真的挺 开心今天赚了不少真的挺开心</p>
          <div class="tu_box">
            <img src="../../assets/img/friendster/____1.png" alt />
            <img src="../../assets/img/friendster/____1.png" alt />
          </div>
          <div class="pinzan_box">
            <div class="pinzan">
              <div class="kong_box"></div>
              <div class="zan_box">
                <van-icon name="like-o" />
                <p>
                  <span>雷厉风行，</span>
                  <span>烽火不及，</span>
                  <span>抬头望月，…</span>
                </p>
              </div>
              <div class="pinlun_box">
                <div>
                  <span>雷厉风行:</span>
                  <p>厉害干得不错</p>
                </div>
              </div>
            </div>
            <div class="btn">
              <span></span>
              <span></span>
            </div>
          </div>
          <!-- <div class="li_box" style="height:0.8rem">
            <div></div>
            <div class="btn">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="li_box zan_box" style="height:0.6rem">
            <div>
              <van-icon name="like-o" />
              <p>
                <span>雷厉风行，</span>
                <span>烽火不及，</span>
                <span>抬头望月，…</span>
              </p>
            </div>
            <div></div>
          </div>
          <div class="li_box pinlun_box">
            <div>
              <span>雷厉风行:</span>
              <p>厉害干得不错</p>
            </div>
          </div>-->
        </div>
      </li>
    </ul>
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
    manage: function() {
      this.$store.commit("show_typeid", 302);
      this.$router.push("/friendster/issue");
    }
  }
};
</script>
<style scoped>
.Friends{
  background: #fff;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.Friends::-webkit-scrollbar{
  display: none;
}
.topbtn_box {
  display: flex;
  height: 0.6rem;
  align-items: center;
  justify-content: center;
}
.topbtn_box > span {
  width: 1.1rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  color: rgba(51, 51, 51, 1);
  font-weight: normal;
  text-align: center;
}

li {
  display: flex;
  padding: 0.12rem 0.3rem 0.39rem;
}
li > img {
  height: 0.81rem;
  padding-left: 0.1rem;
  padding-right: 0.28rem;
}
.neirong_box > p:nth-child(1) {
  line-height: 0.5rem;
}
.neirong_box > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 0.46rem;
}
.tu_box {
  display: flex;
  /* justify-content: center; */
}
.tu_box img {
  width: 1.6rem;
  margin-right: 0.1rem;
}
.li_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.li_box > div:nth-child(1) {
  flex: auto;
}
.li_box > div:nth-child(2) {
  width: 0.6rem;
  margin-left: 0.09rem;
}
.btn {
  width: 0.6rem;
  height: 0.4rem;
  background: rgba(247, 247, 247, 1);
  border-radius: 0.04rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 0.09rem;
}

.btn > span {
  width: 0.06rem;
  height: 0.06rem;
  display: inline-block;
  border-radius: 50%;
  background: RGBA(170, 170, 170, 1);
}

.pinlun_box {
  background: rgba(247, 247, 247, 1);
  padding: 0.16rem 0.2rem 0.28rem;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #333333ff;
  margin-top: 0.06rem;
}
.pinlun_box span {
  color: rgba(57, 142, 245, 1);
}
.pinlun_box > div {
  display: flex;
}
.pinzan_box {
  display: flex;
}
.pinzan_box > div:nth-child(1) {
  flex: auto;
}
.pinzan {
  display: flex;
  flex-direction: column;
}
.kong_box {
  width: 100%;
  height: 0.8rem;
}
.zan_box {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  background: rgba(247, 247, 247, 1);
}
.zan_box > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(57, 142, 245, 1);
  margin-left: 0.1rem;
  overflow: hidden;
}
.blue {
  background: rgba(57, 142, 245, 1);
  color: rgba(255, 255, 255, 1) !important;
}
</style>