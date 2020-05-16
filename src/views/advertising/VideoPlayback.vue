<template>
  <div class="container_box" id="video_box">
    <div class="tools_right">
      <!-- <div class="tools_r_li"> -->
      <img @click="back" style="height: 0.4rem;" src="@/assets/img/backimg.png" alt />
      <p
        style="font-family: Adobe Heiti Std;
  margin-left: 0.32rem;
  font-weight: normal;
  font-size: 0.3rem;
  color: #333;"
        v-text="'返回'"
      ></p>
      <!-- </div> -->
    </div>
    <div class="van_swipe">
      <!--vant van-swipe 滑动组件 -->
      <!-- <van-swipe :show-indicators="false" @change="onChange" vertical :loop="false"> -->
      <!-- <van-swipe-item v-for="(item, index) in videoList" :key="index" class="product_swiper"> -->
      <div class="video_container">
        <!-- loop -->
        <video
          class="video_box"
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          x5-video-player-fullscreen="true"
          playsinline
          preload="auto"
          :poster="$api.baseUrl + querydata.ad_head_pic"
          :src="$api.baseUrl + querydata.video"
          :playOrPause="playOrPause"
          @click="pauseVideo"
          @ended="onPlayerEnded"
        ></video>
        <!-- 封面 -->
        <img
          v-show="isVideoShow"
          class="play"
          @click="playvideo"
          :src="$api.baseUrl + querydata.ad_head_pic"
        />
        <!-- 播放暂停按钮 -->
        <img
          v-show="iconPlayShow"
          class="icon_play"
          @click="playvideo"
          src="http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575340653940esdHR.png"
        />
      </div>
      <!-- 右侧头像、点赞、评论、分享功能 -->

      <!-- 底部作品描述 -->
      <!-- <div class="production_box">
        <div class="production_name">@{{item.author}}</div>
        <div class="production_des">{{item.des}}</div>
      </div>-->
      <!-- </van-swipe-item>
      </van-swipe>-->
      <!--底部操作栏-->
      <transition name="bounce">
        <div class="container_bottom"  v-show="iconPlayShow">
          <div>
            <p>{{ querydata.ad_name }}</p>
            <p>公司名称：{{ querydata.company_name?querydata.company_name : "暂无" }}</p>
            <p>简介：{{ querydata.content? querydata.content : "暂无" }}</p>
            <p>联系方式：{{ querydata.tel? querydata.tel : "暂无" }}</p>
          </div>
          <div>
            <img src="../../assets/img/personal/eyeimg.png" alt />
            {{ querydata.skim? querydata.skim : 0 }}
          </div>
        </div>
      </transition>

      <!--分享弹框-->
      <!-- <div class="share_box" :class="showShareBox?'share_active':''">
        <div class="share_tips">分享到</div>
        <ul class="share_ul">
          <li class="share_li pengyouquan_li">
            <i class="iconfont icon-pengyouquan pengyouquan"></i>
          </li>
          <li class="share_li">
            <i class="iconfont icon-weixin weixin"></i>
          </li>
          <li class="share_li" @click="copyUrl">
            <i class="iconfont icon-lianjie lianjie"></i>
          </li>
          <div class="clear"></div>
        </ul>
        <div class="share_cancel" @click="cancelShare">取消</div>
      </div>-->
      <!--留言弹窗-->
      <!-- <van-popup
        v-model="commentPop"
        closeable
        :overlay="true"
        class="comment_container"
        position="bottom"
      >
        <div class="comment_box">
          <div class="comment_top">
            12.5w条评论
            <i class="iconfont icon-guanbi1 guanbi3" @click="closeComment"></i>
          </div>
          <ul class="comment_ul">
            <div v-if="videoComment.length!=0">
              <transition-group appear>
                <li
                  class="comment_li"
                  v-for="(item,index) in videoComment"
                  :key="index"
                  @click="replayUser(item,index,-1)"
                >
                  <div class="comment_author_left">
                    <img :src="item.avatar" />
                  </div>
                  <div class="comment_author_right">
                    <div class="comment_author_top">
                      <div class="comment_author_name">@{{item.nickname}}</div>
                      <div class="icon-shoucang1_box" @click.stop="commentLove(item,index,-1)">
                        <div class="icon_right_change" :class="item.love_comment?'love_active':''">
                          <i class="iconfont icon-shoucang icon-shoucang1"></i>
                        </div>
                        <div class="shoucang1_num">{{item.love_count}}</div>
                      </div>
                    </div>
                    <div class="comment_author_text">
                      {{item.comment_content}}
                      <span>{{item.create_time}}</span>
                    </div>
                  </div>
                  <div class="clear"></div>
                  <div class="comment_replay_box">
                    <transition-group appear>
                      <div
                        class="comment_replay_li"
                        v-for="(item2,index2) in item.child_comment"
                        :key="index2"
                        @click.stop="replayUser(item2,index,index2)"
                      >
                        <div class="comment_replay_left">
                          <img :src="item2.avatar" />
                        </div>
                        <div class="comment_replay_right">
                          <div class="comment_replay_top">
                            <div class="comment_replay_name">@{{item2.nickname}}</div>
                            <div
                              class="icon-shoucang1_box"
                              @click.stop="commentLove(item2,index,index2)"
                            >
                              <div
                                class="icon_right_change"
                                :class="item2.love_comment?'love_active':''"
                              >
                                <i class="iconfont icon-shoucang icon-shoucang1"></i>
                              </div>
                              <div class="shoucang1_num">{{item2.love_count}}</div>
                            </div>
                          </div>
                          <div class="comment_replay_text">
                            <span
                              v-if="item.user_id!=item2.be_commented_user_id && item.user_id!=item2.user_id"
                            >回复 {{item2.be_commented_nickname}}：</span>
                            {{item2.comment_content}}
                            <span>{{item2.create_time}}</span>
                          </div>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </transition-group>
                  </div>
                </li>
              </transition-group>
            </div>
            <div class="no_message" v-if="videoComment.length==0">
              <i class="iconfont iconfont_style icon-zanwupinglun"></i>
              <div class="no_message_tips">暂无评论</div>
            </div>
          </ul>
        </div>
      </van-popup>-->
      <!--留言输入-->
      <!-- <div class="comment_input_box_hover"></div>
      <div class="comment_input_box" v-show="commentPop">
        <input
          :placeholder="commentPlaceholder"
          class="comment_input"
          v-model="comment_text"
          ref="content"
          @keyup.enter="checkComment"
        />
        <div class="comment_input_right" @click="checkComment">
          <i class="iconfont icon-fasong comment_i" :class="canSend?'comment_i_active':''"></i>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Toast } from "vant";

Vue.use(Swipe, Toast).use(SwipeItem);

// let videoProcessInterval;
export default {
  name: "home",
  data() {
    let u = navigator.userAgent;
    return {
      querydata: {
        ad_head_pic: ""
      },
      current: 0,
      item: {
        url:
          "http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4", //视频源
        cover: "http://oss.jishiyoo.com/images/file-1575341210559.png" //封面
      },
      isVideoShow: true,
      playOrPause: true,
      video: null,
      iconPlayShow: true,
      isAndroid: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, // android终端
      isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      tabIndex: 0,
      showShareBox: false, //展示分享框
      commentPop: false, //是否展示评论弹框
      // 评论相关
      // comment_text: "", //评论输入内容
      canSend: false, //是否可以发送
      videoComment: [],
      commentPlaceholder: "留下你精彩的评论吧", //评论Placeholder
      replayUserData: "",
      to_comment_id: "",
      videoProcess: 0 //视频播放进度
    };
  },
  watch: {
    //监听输入变化
    // comment_text(newV, oldV) {
    //   newV == "" ? (this.canSend = false) : (this.canSend = true);
    // }
  },
  mounted() {
    this.querydata = this.$route.query;
    console.info(this.querydata.video);
    if (!this.querydata.video) {
      this.getadvertDetail();
    }
  },
  beforeDestroy() {
    clearInterval(this.videoProcessInterval);
  },
  methods: {
    getadvertDetail: function() {
      this.axios
        .post(this.$api.index_advertDetail, {
          id: this.querydata.id
        })
        .then(data => {
          if (data.code == 200) {
            if (data.data[0]) {
              this.querydata = data.data[0];
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    back: function() {
      this.$router.go(-1);
    },
    // 开始播放
    playvideo() {
      let video = document.querySelectorAll("video")[this.current];
      this.isVideoShow = false;
      this.iconPlayShow = false;
      this.showShareBox = false;
      video.play();
      window.onresize = function() {
        video.style.width = window.innerWidth + "px";
        video.style.height = window.innerHeight + "px";
      };
      this.videoProcessInterval = setInterval(() => {
        this.changeProcess(video);
      }, 100);
    },
    pauseVideo() {
      //暂停\播放
      try {
        let video = document.querySelectorAll("video")[this.current];

        if (this.playOrPause) {
          video.pause();
          this.iconPlayShow = true;
          clearInterval(this.videoProcessInterval);
        } else {
          video.play();
          video.pause();
          setTimeout(() => {
            video.play();
            this.iconPlayShow = false;
            this.videoProcessInterval = setInterval(() => {
              this.changeProcess(video);
            }, 100);
          }, 100);
        }
        this.playOrPause = !this.playOrPause;
        this.showShareBox = false;
      } catch (e) {
        alert(e);
      }
    },
    //记录播放进度
    changeProcess() {
      let video = document.querySelectorAll("video")[this.current];
      let currentTime = video.currentTime.toFixed(1);
      let duration = video.duration.toFixed(1);
      this.videoProcess = parseInt((currentTime / duration).toFixed(2) * 100);
    },
    onPlayerEnded() {
      //视频结束
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.advert_get_ad_ito, {
        id:this.querydata.id
      })
        .then(data => {
          if (data.code === 200) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast("请求异常");
        });
      // this.isVideoShow = true;
      this.current += this.current;
    }
    //复制当前链接
    // copyUrl() {
    //   let httpUrl = window.location.href;
    //   var oInput = document.createElement("input");
    //   oInput.value = httpUrl;
    //   document.body.appendChild(oInput);
    //   oInput.select(); // 选择对象
    //   document.execCommand("Copy"); // 执行浏览器复制命令
    //   oInput.className = "oInput";
    //   oInput.style.display = "none";
    //   alert("链接复制成功");
    // }
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}
.back_i {
  position: fixed;
  top: 20px;
  left: 10px;
  width: 28px;
  z-index: 10;
}

.video-player {
  height: 100vh;
  width: 100vw;
}

.product_swiper {
  width: 100vw;
  height: 100vh;
}

.van_swipe {
  width: 100vw;
  height: 100vh;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
}

.van-swipe {
  width: 100%;
  height: 100%;
}

.container_box {
  width: 100vw;
  height: 100vh;
  background: #000;
}

.video_box {
  object-fit: fill !important;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

video {
  object-position: 0 0;
}

.icon_play {
  position: absolute;
  top: 44%;
  right: 0;
  left: 0;
  bottom: auto;
  margin: auto;
  z-index: 999;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

.play,
.platStart {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
}

/*头像， 点赞，转发 */
.tag_image {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0px 0px 10px #9d9d9d;
}

.tag_add {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  border-radius: 67px;
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: 0 auto;
  z-index: 1;
  font-size: 20px;
  color: #f44;
  background: #fff;
}

.tag_dui {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  border-radius: 67px;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 0 auto;
  z-index: 1;
  font-size: 11px;
  color: #f44;
  background: #fff;
}

.tag_dui_active {
  opacity: 0;
  animation: showFollow 1.4s ease-in-out 0s;
}

.tag_add_num {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
}

@keyframes showFollow {
  0% {
    opacity: 1;
    color: #fff;
    background: #f44;
    transform: rotate(-180deg) scale(1);
  }
  35% {
    opacity: 1;
    color: #f44;
    background: #fff;
    transform: rotate(0deg) scale(1.2);
  }
  80% {
    opacity: 1;
    color: #f44;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    display: none;
    color: #f44;
    transform: scale(0);
  }
}

.tools_right {
  z-index: 1001;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.3rem 0.27rem;
  display: flex;
}

.tools_r_li {
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  position: relative;
}

.tools_r_li:last-child {
  margin-bottom: 0px;
}

.icon_right {
  margin-bottom: 5px;
  font-size: 42px;
  display: block;
  text-shadow: 0px 0px 10px #9d9d9d;
  /*transition: .5s;*/
}

.production_box {
  z-index: 1001;
  position: absolute;
  /* right: 16px; */
  bottom: 48px;
  text-align: left;
  padding: 0 15px 15px 15px;
  color: #fff;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  /* 标准的语法 */
}

.production_name {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
}

.production_des {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  min-height: 62px;
  font-size: 13px;
}

.container_bottom {
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 2.3rem;
  /* max-width: 550px; */
  display: flex;
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.container_bottom > div:nth-child(1) {
  padding: 0.3rem 0.3rem 0.2rem 0.3rem;
  flex: 4;
}
.container_bottom > div:nth-child(2) {
  padding: 0.2rem;
  flex: 1;
}
.container_bottom img {
  width: 0.3rem;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(2.5rem); 
  }
  100% {
    transform: translateY(0);
  }
}
.production_top {
  display: inline-block;
  padding: 6px;
  margin-bottom: 5px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  margin-top: 5px;
}

.product_go {
  color: #fbdd21;
}

.production_title {
  margin-left: 4px;
}

.border_progress {
  width: 0;
  height: 1px;
  background: #bababa;
  position: absolute;
  top: 0;
  transition: 0.1s all;
}

.bottom_tab {
  width: 33%;
  text-align: center;
  float: left;
  color: #c9c9c9;
  padding: 10px 0;
}

.bottom_tab_icon {
  width: 44px;
}

.bottom_tab_span {
  line-height: 28px;
  border-bottom: 2px solid transparent;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  padding: 0 4px;
  transition: 0.5s all;
}

.tab_active .bottom_tab_span {
  border-bottom: 2px solid #fff;
  color: #fff;
}

.icon-shoucang {
  transition: 0.5s all;
}

.fabulous_active {
  color: #f44;
  animation: showHeart 0.5s ease-in-out 0s;
}

/*animation-name：用来调用@keyframes定义好的动画，与@keyframes定义的动画名称一致*/
/*animation-duration ：指定元素播放动画所持续的时间*/
/*animatino-timing-function ： 和transition中的transition-timing-function 中的值一样。根据上面@keframes中分析的animation中可能存在多个小动画，因此这里的值设置是针对每一个小动画所在时间范围内的属性变换速率。*/
/*animation-delay：定义在浏览器开始执行动画之前等待的时间，这里是指整个animation执行之前的等待时间，而不是上面说的多个小动画*/
/*animation-iteration-count：定义动画的播放次数，其通常为整数，默认是1,；取值为infinite，动画将无限次的播放。*/
/*animation-direction：主要用来设置动画播放方向*/
@keyframes showHeart {
  0% {
    color: #f44;
    transform: scale(1);
  }

  25% {
    color: #fff;
    transform: scale(0);
  }

  80% {
    color: #f44;
    transform: scale(1.2);
  }

  100% {
    color: #f44;
    transform: scale(1);
  }
}

/*分享样式*/
.share_hover {
  position: fixed;
  display: none;
}

.share_box {
  position: fixed;
  bottom: -300px;
  width: 100%;
  z-index: 1002;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: 0.5s;
}

.share_tips {
  text-align: center;
  line-height: 38px;
  color: #333;
}

.share_ul {
  box-sizing: border-box;
  padding: 0 25px 25px;
  border-bottom: 1px solid #e8e8e8;
}

.share_li {
  float: left;
  width: 33%;
  text-align: center;
}

.share_li i {
  font-size: 44px;
}

.share_cancel {
  text-align: center;
  line-height: 48px;
  color: #777;
  text-align: center;
}

.pengyouquan {
  color: #47d000;
}

.pengyouquan_li {
  animation: rotating 8s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.weixin {
  color: #20ca2e;
}

.lianjie {
  color: #cdcdcd;
}

.share_active {
  bottom: 0px;
}

/*评论样式*/
::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

:-moz-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

::-moz-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

.comment_container {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.comment_box {
  padding: 0 15px 52px 15px;
}

.comment_top {
  text-align: center;
  font-size: 12px;
  color: #000;
  line-height: 40px;
}

.guanbi3 {
  float: right;
  font-size: 12px;
  padding: 0 10px;
  position: absolute;
  right: 6px;
}

.comment_li {
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
}

.comment_author_left {
  float: left;
}

.comment_author_left img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.comment_author_right {
  margin-left: 46px;
  padding-top: 4px;
}

.comment_author_top {
  position: relative;
}

.comment_author_name {
  margin-bottom: 6px;
  color: #777;
}

.icon-shoucang1_box {
  position: absolute;
  right: 0px;
  top: 0;
  text-align: center;
  color: #777;
}

.comment_author_text {
  color: #555;
  margin-bottom: 10px;
  padding-right: 35px;
}

.comment_replay_box {
  padding-left: 46px;
  box-sizing: border-box;
}

.comment_replay_li {
  margin-bottom: 10px;
}

.comment_replay_left {
  float: left;
}

.comment_replay_left img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.comment_replay_right {
  margin-left: 35px;
  padding-top: 2px;
}

.comment_replay_top {
  position: relative;
  margin-bottom: 6px;
}

.comment_replay_text {
  padding-right: 35px;
  margin-bottom: 10px;
  color: #555;
}

.comment_author_text span,
.comment_replay_text span {
  color: #999;
  font-size: 13px;
  margin-left: 6px;
}

.shoucang1_num {
  text-align: center;
  width: 30px;
  font-size: 12px;
  /* right: -4px; */
  position: relative;
}

.comment_ul {
  height: 400px;
  overflow-y: auto;
}

.comment_input_box {
  position: fixed;
  bottom: 0;
  z-index: 2999;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  background: #fff;
  padding: 10px 15px;
  box-sizing: border-box;
}

/*.comment_form {*/
/**/
/*}*/

.comment_input {
  border: none;
  resize: none;
  width: 80%;
  float: left;
  color: #555;
  caret-color: #f44;
}

.comment_input_right {
  float: right;
}

.comment_i {
  font-size: 22px;
  color: #999;
  transition: 0.3s;
}

.comment_i_active {
  color: #f44;
}

.icon-zanwupinglun {
  font-size: 100px;
  color: #777;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/*添加进场效果*/
.v-move {
  transition: all 1s ease;
}

.v-leave-active {
  position: absolute;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

.love_active {
  color: #f44;
}

/*评论样式*/
</style>
