<!-- 上传广告 -->
<template>
  <div class="UpAdvertising">
    <breadcrumb></breadcrumb>
    <ul>
      <li>
        <span>
          <i>*</i>视频名称
        </span>
        <van-field v-model="text" placeholder="请输入视频名称" />
      </li>
      <li>
        <span>公司名称</span>
        <van-field v-model="text" placeholder="请输入公司名称" />
      </li>
      <li>
        <span>简介</span>
        <van-field v-model="text" placeholder="请输入视频简介" />
      </li>
      <li>
        <span>联系电话</span>
        <van-field v-model="text" placeholder="请输入联系电话" />
      </li>
      <li>
        <span>广告分类</span>
      </li>
      <li>
        <span>总佣金池</span>
        <van-field v-model="text" placeholder="设置广告总佣金池" />
      </li>
      <li>
        <span>单次佣金</span>
        <van-field v-model="text" placeholder="单次观看广告佣金" />
      </li>
    </ul>
    <div class="up_box">
      <div>
        <span>封面图片</span>
        <span>建议比例统一为1:1</span>
        <img src="../../assets/img/personal/upimg.png" alt />
      </div>
      <div>
        <span>封面图片</span>
        <span>建议比例统一为1:1</span>
        <img src="../../assets/img/personal/upimg.png" alt />
      </div>
    </div>
    <div class="upadvertising_box">
      <van-button class="upadvertisingbtn" type="info">上传广告</van-button>
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
      text: "",
      typeid: this.$store.getters.get_typeid
    };
  },
  methods: {}
};
</script>
<style scoped>
.UpAdvertising {
  background-color: #f8f6f7;
}
ul {
  background-color: #fff;
  padding-bottom: 0.52rem;
  margin-bottom: 0.2rem;
}
li {
  display: flex;
  padding-top: 0.3rem;
  padding-right: 0.3rem;
}
li > span {
  width: 2rem;
  height: 0.7rem;
  /* text-align: center; */
  line-height: 0.7rem;
  padding-left: 0.31rem;
  display: inline-block;
}
i {
  color: #fd1a1a;
}
.up_box {
  background-color: #fff;
}
.up_box > div {
  /* display: flex; */
  height: 1.4rem;
  padding: 0.4rem 0.3rem 0.15rem 0.3rem;
}
.up_box > div:nth-child(2) {
  padding-top: 0.15rem !important;
}
.up_box > div > span {
  height: 100%;
  line-height: 1.4rem;
  display: inline-block;
}
.up_box > div > span:nth-child(1) {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.up_box > div > span:nth-child(2) {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  margin-left: 0.68rem;
}
.up_box > div > img {
  height: 1.4rem;
  float: right;
}

.upadvertising_box {
  width: 100%;
  height: 0.98rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upadvertisingbtn {
  width: 6rem;
  height: 0.7rem;
  border-radius: 0.35rem;
}
</style>

<style>
.UpAdvertising .van-cell {
  background: #f6f6f6;
  height: 0.7rem;
}
.UpAdvertising .van-cell {
  flex: auto;
  width: 0px !important;
}
</style>