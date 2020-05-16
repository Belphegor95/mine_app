<!-- 签到 -->
<template>
  <div class="SignIn_box">
    <breadcrumb :transparent="true"></breadcrumb>
    <div class="qiandao_box">
      <div class="qiandao">
        <span :class=" item ? 'yellow': 'gray'" v-for="(item,index) in week" :key="index">
          <p>{{ index + 1 }}</p>
          <img v-if="item" src="../assets/img/pigeon.png" alt />
          <img v-else src="../assets/img/gold.png" alt />
        </span>
        <!-- <span class="gray">
          <p>2</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>3</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>4</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>5</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>6</p>
          <img src="../assets/img/gold.png" alt />
        </span>
        <span class="gray">
          <p>7</p>
          <img src="../assets/img/gold.png" alt />
        </span>-->
      </div>
      <p>坚持每天签到，收获更多</p>
      <van-button @click="sign" class="quedingbtn" type="info">确定</van-button>
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
      weeks: [
        {
          is: false
        },
        {
          is: false
        },
        {
          is: false
        },
        {
          is: false
        },
        {
          is: false
        },
        {
          is: false
        },
        {
          is: false
        }
      ],
      week: [false, false, false, false, false, false, false]
    };
  },
  mounted() {
    this.getsigninfo();
    // this.isSameWeek(new Date)
  },
  methods: {
    getsigninfo: function() {
      this.token_post(this.$api.user_signinfo)
        .then(data => {
          if (data.code == 200) {
            if (data.data.length != 0) {
              let datas = data.data;
              for (let i = 0; i < 7; i++) {
                if (datas[i]) {
                  let data_time = new Date(datas[i].add_time * 1000);
                  // 判断是不是在本周
                  if (this.isSameWeek(data_time)) {
                    // 计算是本周的周几
                    let week_index = this.get_day(data_time);
                    this.week[week_index - 1] = true;
                    this.$forceUpdate();
                  }
                }
              }
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    sign: function() {
      this.token_post(this.$api.user_sign)
        .then(data => {
          if (data.code == 200) {
            this.$toast(data.msg);
            this.getsigninfo();
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    get_day: function(date) {
      if (date.getDay() === 0) {
        return 7;
      } else {
        return date.getDay();
      }
    },
    isSameWeek: function(inDate) {
      // inDate 是一个date对象
      let inDateStr = inDate.toLocaleDateString(); // 获取如YYYY/MM/DD的日期
      let nowDate = new Date();
      let nowTime = nowDate.getTime();
      let nowDay = nowDate.getDay() - 1;
      for (let i = 0; i < 7; i++) {
        if (
          inDateStr ==
          new Date(
            nowTime + (i - nowDay) * 24 * 3600 * 1000
          ).toLocaleDateString()
        )
          return true;
      }
      return false;
    }
  },
  computed: {}
};
</script>
<style scoped>
.SignIn_box {
  height: 100%;
  background-image: url("../assets/img/sign_inimg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;
}
.qiandao_box {
  position: absolute;
  top: 6.3rem;
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  text-align: center;
}
.qiandao {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.qiandao > span {
  /* width: 0.8rem; */
  height: 1rem;
  border-radius: 0.1rem;
  padding: 0.11rem 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qiandao > span > img {
  height: 0.39rem;
}
.qiandao_box > p {
  margin-top: 0.26rem;
  margin-bottom: 0.8rem;
}
.quedingbtn {
  width: 6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
}
.yellow {
  background: rgba(251, 246, 196, 1);
}
.gray {
  background: rgba(247, 247, 247, 1);
}
</style>