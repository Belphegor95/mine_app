<!-- 朋友圈 -->
<template>
  <div class="Friends">
    <breadcrumb @is_manage="manage"></breadcrumb>
    <div class="topbtn_box">
      <span class="blue">文字</span>
      <span>视频</span>
    </div>
    <van-empty v-if="friendlist.length === 0" description="暂无数据" />
    <ul v-else>
      <li v-for="(item,index) in friendlist" :key="index">
        <img :src="$api.baseUrl + item.us_head_pic" alt />
        <div class="neirong_box">
          <p>雷厉风行</p>
          <p>{{ item.content }}</p>
          <div class="tu_box" v-if="item.pic">
            <img
              v-for="(item1,index1) in item.imgarr"
              :key="index1"
              :src="$api.baseUrl + item1"
              alt
            />
          </div>
          <div class="pinzan_box">
            <div class="pinzan">
              <div class="zan_box" v-if="item.users.length != 0">
                <van-icon name="like-o" />
                <p>
                  <span v-for="(item1,index1) in item.users" :key="index1">{{ item1 }}，</span>
                  <!-- <span>烽火不及，</span>
                  <span>抬头望月，…</span>-->
                </p>
              </div>
              <div class="pinlun_box" v-if="item.advisory.length != 0">
                <div v-for="(item1,index1) in item.advisory" :key="index1">
                  <p>
                    <span>{{ item1.us_nickname }}:</span>
                    {{ item1.content }}
                  </p>
                </div>
              </div>
            </div>
            <div class="btn" @click="()=>active = active == undefined?index:undefined">
              <span></span>
              <span></span>
              <transition name="show1">
                <div v-if="active === index" class="tooltip">
                  <span @click="thumb(item.id)">点赞</span>
                  <span>评论</span>
                  <!-- <span>转发</span> -->
                </div>
              </transition>
            </div>
          </div>
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
    return {
      friendlist: [],
      active: undefined
    };
  },
  mounted() {
    this.getfriend();
  },
  methods: {
    getfriend: function() {
      this.token_post(this.$api.friend_index)
        .then(data => {
          if (data.code === 200) {
            this.friendlist = data.data;
            for (let i = 0; i < this.friendlist.length; i++) {
              let item = this.friendlist[i].pic + "";
              this.friendlist[i].imgarr = item.split(",");
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {});
    },
    manage: function() {
      this.$store.commit("show_typeid", 302);
      this.$router.push("/friendster/issue");
    },
    thumb: function(id) {
      // 点赞
      this.token_post(this.$api.friend_thumb, {
        id: id
      }).then(data => {
        if (data.code === 200) {
          this.$toast(data.msg);
          this.getfriend()
        } else {
          this.$toast(data.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
.Friends {
  background: #fff;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.Friends::-webkit-scrollbar {
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
.neirong_box {
  width: 100%;
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
  height: 1.6rem;
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
  position: relative;
  width: 0.3rem;
  height: 0.2rem;
  background: rgba(247, 247, 247, 1);
  border-radius: 0.04rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 0.1rem;
}

.btn > span {
  width: 0.06rem;
  height: 0.06rem;
  display: inline-block;
  border-radius: 50%;
  background: RGBA(170, 170, 170, 1);
}
.tooltip {
  position: absolute;
  width: 3.68rem;
  height: 0.6rem;
  background: rgba(51, 51, 51, 1);
  border-radius: 0.04rem;
  right: 0.5rem;
  display: flex;
}
.tooltip > span {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  /* line-height: 36px; */
  color: #fff;
}

/* .tooltip:after, */
.tooltip:before {
  border: solid transparent;
  content: " ";
  height: 0;
  right: 0;
  top: 50%;
  transform: translate(100%, -50%);
  position: absolute;
  width: 0;
  border-width: 9px;
  border-left-color: rgba(51, 51, 51, 1);
}

/* .tooltip:before {
  border-left-color: rgba(51,51,51,1)3;
  top: 0.1rem;
} */
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
  white-space: normal nowrap;
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
  padding-top: 0.2rem;
  flex-direction: column;
}
.zan_box {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.2rem;
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
