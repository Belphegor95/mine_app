<!-- 上传广告 -->
<template>
  <div class="UpAdvertising">
    <breadcrumb></breadcrumb>
    <ul class="ullist">
      <li>
        <span>视频名称</span>
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
        <van-field v-model="tel" type="digit" placeholder="请输入联系电话" />
      </li>
      <li>
        <span>广告分类</span>
        <van-dropdown-menu style="flex: auto;">
          <van-dropdown-item v-model="ca_id" :options="option1" />
        </van-dropdown-menu>
      </li>
      <li>
        <span>单次佣金</span>
        <van-field v-model="single" type="digit" placeholder="单次观看广告佣金" />
      </li>
      <li>
        <span>任务次数</span>
        <van-field v-model="total" type="digit" placeholder="设置任务次数" />
      </li>
      <li>
        <span>预付赏金</span>
        <div style="padding: 10px 16px;color: #aaa;font-size: 0.3rem">{{`${single*total}`}}</div>
      </li>
      <!-- <span style="">: </span> -->
    </ul>
    <div class="up_box">
      <div>
        <span>封面图片</span>
        <span style="flex: 1;">建议比例统一为1:1</span>
        <label>
          <img v-if="ad_head_pic"  style="width: 1.6rem;height: 1.6rem;margin-right: .16rem" :src="ad_head_pic" alt />
          <van-uploader v-show="!ad_head_pic" style="float: right;" accept="image/*" :after-read="uploadImg" />
        </label>
      </div>
      <div>
        <span>上传视频</span>
        <p style="flex: 1;">MP4格式，推荐时长15秒以内，大小不得超过20M</p>
        <van-uploader style="float: right;" accept="video/*" :after-read="uploadVideo" />
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
      data: [],
      text: "",
      typeid: this.$store.getters.get_typeid,
      ad_name: "", // "舞蹈",
      company_name: "", // "芭蕾公司",  //公司名称
      ca_id: 0, // 1,
      ad_head_pic: "", // "上传的图片",
      tel: "", //联系电话
      total: "", //总佣金
      single: "", //单一佣金
      video: "", //视频
      content: "" // "好的舞蹈，好的公司"  //简介
    };
  },
  mounted() {
    this.getcates();
  },
  methods: {
    getcates: function() {
      this.axios
        .get(this.$api.index_cates)
        .then(data => {
          if (data.code == 200) {
            this.option1 = data.data.cates;
            for (let i = 0; i < this.option1.length; i++) {
              let item = this.option1[i];
              item.text = item.ca_name;
              item.value = item.id;
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    uploadImg: function(file) {
      // 上传
      this.ad_head_pic = file.content;
    },
    uploadVideo: function(file) {
      // 上传
      if (file.file.type.indexOf("mp4") == -1) {
        return this.$toast.fail("只支持上传mp4格式");
      }
      if (file.file.size > 20000000) {
        return this.$toast.fail("请上传20M以内视频");
      }
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      const formData = new FormData();
      formData.append("file", file.file);
      this.axios
        .post(this.$api.every_upload, formData, {
          headers: {
            "Content-Type": "multipart/form-data;"
          }
        })
        .then(data => {
          if (data.code == 200) {
            this.video = data.data;
            this.$toast(data.msg);
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    addadvert: function() {
      if (this.ad_name.trim() == "") {
        this.$toast("视频名称输入有误");
        return;
      } else if (this.company_name.trim() == "") {
        this.$toast("视频名称输入有误");
        return;
      } else if (this.ca_id == 0) {
        this.$toast("广告分类未选择");
        return;
      } else if (this.ad_head_pic.trim() == "") {
        this.$toast("封面图片未上传");
        return;
      } else if (this.tel.trim() == "") {
        this.$toast("联系电话输入有误");
        return;
      } else if (this.total.trim() == "") {
        this.$toast("总佣金池输入有误");
        return;
      } else if (this.single.trim() == "") {
        this.$toast("单次佣金输入有误");
        return;
      } else if (this.video.trim() == "") {
        this.$toast("视频未上传");
        return;
      } else if (this.content.trim() == "") {
        this.$toast("简介输入有误");
        return;
      }
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.advert_add, {
        ad_name: this.ad_name ? this.ad_name : null,
        company_name: this.company_name ? this.company_name : null,
        ca_id: this.ca_id ? this.ca_id : null,
        ad_head_pic: this.ad_head_pic ? this.ad_head_pic : null,
        tel: this.tel ? this.tel : null,
        total: this.total ? this.total : null,
        single: this.single ? this.single : null,
        video: this.video ? this.video : null,
        content: this.content ? this.content : null
      })
        .then(data => {
          if (data.code == 200) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                this.$router.go(-1);
              }
            });
          } else if (data.code == 405) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                this.$store.commit("show_typeid", 17701);
                this.$router.push("/deal");
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
.UpAdvertising {
  background-color: #f8f6f7;
}
.ullist {
  background-color: #fff;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
}
.ullist > li {
  display: flex;
  padding-top: 0.2rem;
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
  display: flex;
  align-items: center;
  height: 1.4rem;
  justify-content: space-between;
  padding: 0.3rem 0.3rem 0.15rem 0.3rem;
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
.up_box > div span:nth-child(2),
.up_box > div p {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
  margin-left: 0.48rem;
}
.up_box > div p {
  margin-right: 0.4rem;
}
.up_box > div img {
  height: 1.4rem;
  float: right;
}

.upadvertising_box {
  width: 100%;
  height: 0.98rem;
  background: #fff;
  position: fixed;
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
.UpAdvertising li > .van-cell > div {
  display: flex;
}
.UpAdvertising li > .van-cell {
  flex: auto;
  width: 0px !important;
}
</style>