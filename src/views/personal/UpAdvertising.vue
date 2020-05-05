<!-- 上传广告 -->
<template>
  <div class="UpAdvertising">
    <breadcrumb></breadcrumb>
    <ul class="ullist">
      <li>
        <span>
          <i>*</i>视频名称
        </span>
        <van-field v-model="ad_name" placeholder="请输入视频名称" />
      </li>
      <li>
        <span>公司名称</span>
        <van-field v-model="company_name" placeholder="请输入公司名称" />
      </li>
      <li>
        <span>简介</span>
        <van-field v-model="content" placeholder="请输入视频简介" />
      </li>
      <li>
        <span>联系电话</span>
        <van-field v-model="tel" placeholder="请输入联系电话" />
      </li>
      <li>
        <span>广告分类</span>
        <van-dropdown-menu style="flex: auto;">
          <van-dropdown-item v-model="ca_id" :options="option1" />
        </van-dropdown-menu>
      </li>
      <li>
        <span>总佣金池</span>
        <van-field v-model="total" placeholder="设置广告总佣金池" />
      </li>
      <li>
        <span>单次佣金</span>
        <van-field v-model="single" placeholder="单次观看广告佣金" />
      </li>
    </ul>
    <div class="up_box">
      <div>
        <span>封面图片</span>
        <span>建议比例统一为1:1</span>
        <van-uploader style="float: right;" :after-read="upload" />
        <!-- <van-uploader style="float: right;">
          <img src="../../assets/img/personal/upimg.png" alt />
        </van-uploader>-->
      </div>
      <div>
        <span>上传视频</span>
        <span>MP4格式，大小不得超过10M</span>
        <van-uploader style="float: right;" :after-read="upload" />
        <!-- <van-uploader style="float: right;">
          <img src="../../assets/img/personal/upimg.png" alt />
        </van-uploader>-->
      </div>
    </div>
    <div class="upadvertising_box">
      <van-button @click="addadvert" class="upadvertisingbtn" type="info">上传广告</van-button>
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
      option1: [
        { text: "日用百货", value: 0 },
        { text: "服装", value: 1 },
        { text: "数码3C", value: 2 },
        { text: "母婴", value: 3 },
        { text: "箱包礼品", value: 4 },
        { text: "家居家装", value: 5 }
      ],
      text: "",
      typeid: this.$store.getters.get_typeid,
      ad_name: "", // "舞蹈",
      company_name: "", // "芭蕾公司",  //公司名称
      ca_id: 0, // 1,
      ad_head_pic: "", // "",
      tel: "", //联系电话
      total: "", //总佣金
      single: "", //单一佣金
      video: "", //视频
      content: "" // "好的舞蹈，好的公司"  //简介
    };
  },
  methods: {
    upload: function(file) {
      // 上传
      this.axios
        .post(this.$api.every_upload, {
          file: file.file
        })
        .then(data => {
          if (data.code === 200) {
            console.log(data);
          }
        })
        .catch(() => {});
    },
    addadvert: function() {
      //
      this.token_post(this.$api.advert_add, {
        ad_name: this.ad_name, 
        company_name: this.company_name, 
        ca_id: this.ca_id, 
        ad_head_pic: this.ad_head_pic, 
        tel: this.tel, 
        total: this.total, 
        single: this.single, 
        video: this.video, 
        content: this.content 
      }).then((data) => {
        if (data.code === 200) {
          console.log(data);
          
        }
      }).catch(() => {

      })
    }
  }
};
</script>
<style scoped>
.UpAdvertising {
  background-color: #f8f6f7;
}
.ullist {
  background-color: #fff;
  padding-bottom: 0.52rem;
  margin-bottom: 0.2rem;
}
.ullist > li {
  display: flex;
  padding-top: 0.3rem;
  padding-right: 0.3rem;
}
.ullist > li > span {
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
.up_box > div span {
  height: 100%;
  line-height: 1.4rem;
  display: inline-block;
}
.up_box > div span:nth-child(1) {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.up_box > div span:nth-child(2) {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  margin-left: 0.68rem;
}
.up_box > div img {
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
.UpAdvertising li > .van-cell {
  background: #f6f6f6;
  height: 0.7rem;
}
.UpAdvertising li > .van-cell {
  flex: auto;
  width: 0px !important;
}
</style>