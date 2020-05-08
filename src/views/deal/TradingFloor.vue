<!-- 交易大厅 -->
<template>
  <div class="TradingFloor">
    <breadcrumb></breadcrumb>
    <div class="my_box">
      <div class="top1_box">
        <span></span>
        <span>全网交易数据</span>
      </div>
      <div class="xinxi_box">
        <span>今日价格: {{ mydata.price }}</span>
        <span>24h成交量: {{ mydata.num }}</span>
      </div>
      <div id="myChart" :style="{width: '100%', height: '180px'}"></div>
    </div>
    <div class="head_box">
      <div>出售</div>
      <!-- <div></div> -->
    </div>
    <ul class="liebiaoHead">
      <li>
        <span>出售数量</span>
        <span>价格</span>
        <span>购买</span>
      </li>
    </ul>
    <div class="liebiao_box">
      <ul>
        <li v-for="(item,index) in tradelist" :key="index" >
          <span @click="particulars">{{ item.num }}</span>
          <span @click="particulars">{{ item.price }}</span>
          <span class="yellow" @click="modal_buy = true">购买</span>
        </li>
      </ul>
    </div>
    <div class="maichu_box">
      <van-button @click="modal = true;" class="maichubtn" type="info">卖出</van-button>
    </div>
    <van-popup class="modal_box" round v-model="modal">
      <div class="mima_box">
        <div>
          <img src="../../assets/img/pigeon.png" alt />
          <van-field @input="getreal" v-model="num" placeholder="请输入出售数量" />
        </div>
        <div class="xianshi_box">
          <!-- <img src="../../assets/img/pigeon.png" alt /> -->
          <div style="margin-left: 0.5rem">
            <p>实际挂卖数: {{ real.real_num }}</p>
            <p>手续费: {{ real.fee }}</p>
            <p>挂单价格: {{ real.price }}</p>
          </div>
        </div>
        <div>
          <img src="../../assets/img/pigeon.png" alt />
          <van-field v-model="us_safe_pwd" placeholder="请输入交易密码" />
        </div>
      </div>
      <van-button @click="show" class="quedingbtn" type="info">确定</van-button>
    </van-popup>
    <van-popup class="modal_box" round v-model="modal_buy">
      <div class="mima_box">
        <div>
          <img src="../../assets/img/pigeon.png" alt />
          <van-field v-model="us_safe_pwd" placeholder="请输入交易密码" />
        </div>
      </div>
      <van-button @click="buy" class="quedingbtn" type="info">确定</van-button>
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
      tradelist: [],
      modal: false,
      modal_buy: false,
      mydata: {},
      num: "",
      us_safe_pwd: "",
      real: {
        fee: 0,
        price: 0,
        real_num: 0
      }
    };
  },
  mounted() {
    this.gettrade();
    
    
  },
  methods: {
    gettrade: function() {
      this.token_post(this.$api.trade_index)
        .then(data => {
          if (data.code === 200) {
            this.tradelist = data.msg.trade;
            this.mydata = data.msg;
            this.mydata.date = []
            this.mydata.list = []
            for (let i = 0; i < this.mydata.flot.length; i++) {
              let item = this.mydata.flot[i];
              let date = new Date(item.update_time);
              
              let yue = date.getMonth() + 1 + "";
              let ri = date.getDate() + ""
              if (yue.length === 1) {
                yue = 0 + yue;
              }
              if (ri.length === 1) {
                ri = 0 + ri;
              }
              this.mydata.date.push(yue + "/" + ri)
              this.mydata.list.push(Number(item.price))
            }
          }
          this.my();
        })
        .catch(() => {});
    },
    //
    show: function() {
      this.token_post(this.$api.trade_sale, {
        num: this.num,
        us_safe_pwd: this.us_safe_pwd
      }).then(data => {
        if (data.code === 200) {
          this.modal = false;
          this.$toast(data.msg);
        } else {
          this.$toast(data.msg);
        }
      });
    },
    getreal: function() {
      this.token_post(this.$api.trade_getreal, {
        num: this.num
      }).then(data => {
        if (data.code === 200) {
          this.real = data.data;
        } else {
          this.$toast(data.msg);
        }
      });
    },
    particulars: function() {
      this.$store.commit("show_typeid", 202);
      this.$router.push("/deal/particulars");
    },
    buy: function () {
      if (this.us_safe_pwd.trim() === "") {
        this.$toast("支付密码输入有误");
        return
      }
      this.token_post(this.$api.trade_buy, {
        us_safe_pwd: this.us_safe_pwd
      }).then(data => {
        if (data.code === 200) {
          this.modal_buy = false;
          this.$toast(data.msg);
        } else {
          this.$toast(data.msg);
        }
      });
    },
    my: function() {
      let size = 8;
      let option = {
        //   数值颜色
        color: ["#69AAEA", "#ff733f", "#ec4863"],
        backgroundColor: "#fff",
        grid: {
          top: "8%",
          left: "6%",
          right: "6%",
          bottom: "8%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },

        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#EEE"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: size,
            textStyle: {
              color: "#000"
            }
          },
          boundaryGap: false,
          data: this.mydata.date
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#CCC"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: size,
            textStyle: {
              color: "#CCC"
            }
          },
          type: "value"
        },
        series: [
          {
            name: "非农业",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: this.mydata.list
          }
        ]
      };
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
.TradingFloor {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
}
.my_box {
  background-color: #fff;
  /* padding-bottom: 0.12rem; */
}
.top1_box {
  font-size: 0.27rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  padding: 0.3rem 0 0.2rem 0.4rem;
}
.top1_box > span:nth-child(1) {
  display: inline-block;
  width: 0.12rem;
  height: 0.22rem;
  background-color: #fd5959;
  margin-right: 0.1rem;
}
.xinxi_box {
  padding-left: 0.2rem;
  font-size: 0.24rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  display: flex;
  padding: 0 0.6rem;
  justify-content: space-between;
}
.xinxi_box > span:nth-child(1) {
  font-size: 0.28rem;
  font-weight: 700;
}
.liebiao_box {
  /* flex: auto; */
  overflow-y: scroll;
  /* margin-top: 0.18rem; */
}
.liebiao_box::-webkit-scrollbar {
  display: none;
}
.liebiaoHead {
  height: auto;
  background: #fff;
}
.liebiaoHead > li {
  background: #fff;
}
.head_box {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: flex-end;
  margin-top: 0.18rem;
  background: url("../../assets/img/deal/title.png") center center / 100% 100%
    no-repeat;
}

.head_box > div:nth-child(1) {
  width: 1.5rem;
  height: 0.5rem;
  /* background: rgba(57, 142, 245, 1); */
  /* border-radius: 10px 10px 0px 0px; */
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 0.5rem;
}
.head_box > div:nth-child(2) {
  /* flex: auto; */
  height: 0.03rem;
  background: rgba(57, 142, 245, 1);
}

ul {
  /* height: 100%; */
  background-color: #fafafa;
}
li {
  display: flex;
  height: 0.8rem;
  justify-content: center;
}
li:nth-of-type(even) {
  background-color: #fff;
}
li > span {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.maichu_box {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(225, 225, 225, 1);
}
.maichubtn {
  width: 6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.35rem;
}

.modal_box {
  /* width: 96%; */
  /* height: 4.5rem; */
  padding: 0 0.5rem;
}
.mima_box {
  margin-top: 1.2rem;
  margin-bottom: 1.3rem;
}
.mima_box > div {
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
}
.mima_box > div > img {
  width: 0.35rem;
  margin-right: 0.15rem;
}
.quedingbtn {
  width: 6rem;
  height: 0.8rem;
  margin-bottom: 0.5rem;
  /* background: rgba(57, 142, 245, 1); */
}
.yellow {
  color: #fcb63b;
}
.xianshi_box {
  font-size: 0.26rem;
}
/* .xianshi_box > div {
  display: flex;
  width: 100%;
}
.xianshi_box > div  > span:nth-child(1) {
  flex: 1.2;
}

.xianshi_box > div  > span:nth-child(2),
.xianshi_box > div  > span:nth-child(3) {
  flex: 1;
} */
</style>
<style>
.TradingFloor .van-cell {
  background: #f6f6f6;
  height: 0.7rem;
}
/* .TradingFloor .van-cell {
  flex: auto;
  width: 0px !important;
} */
</style>