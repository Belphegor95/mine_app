<!-- 交易大厅 -->
<template>
  <div class="TradingFloor">
    <breadcrumb></breadcrumb>
    <div class="my_box">
      <div class="top_box">
        <span></span>
        <span>全网交易数据</span>
      </div>
      <div class="xinxi_box">
        <span>今日价格: 1.00</span>
        <span>24h成交量: 9448.00</span>
      </div>
      <div id="myChart" :style="{width: '100%', height: '180px'}"></div>
    </div>
    <div class="liebiao_box">
      <div class="head_box">
        <div>出售</div>
        <div></div>
      </div>
      <ul>
        <li>
          <span>出售数量</span>
          <span>价格</span>
          <span>购买</span>
        </li>
        <li v-for="value in 5" :key="value">
          <span>20.1025</span>
          <span>20.1025</span>
          <span class="yellow" @click="particulars">购买</span>
        </li>
      </ul>
    </div>
    <div class="maichu_box">
      <van-button @click="show" class="maichubtn" type="info">卖出</van-button>
    </div>
    <van-popup class="modal_box" round v-model="modal">
      <div class="mima_box">
        <div>
          <img src="../../assets/img/pigeon.png" alt />
          <van-field v-model="text" placeholder="请输入出售数量" />
        </div>
        <div>
          <img src="../../assets/img/pigeon.png" alt />
          <van-field v-model="text" placeholder="请输入单个价格" />
        </div>
        <div>
          <img src="../../assets/img/pigeon.png" alt />
          <van-field v-model="text" placeholder="请输入交易密码" />
        </div>
      </div>
      <van-button @click="show" class="quedingbtn" type="info">确定</van-button>
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
      modal: false,
      text: ""
    };
  },
  mounted() {
    this.my();
  },
  methods: {
    show: function() {
      this.modal = true;
    },
    particulars: function() {
      this.$store.commit("show_typeid", 202);
      this.$router.push("/deal/particulars");
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
          bottom: "4%",
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
          data: [
            "10/01",
            "10/02",
            "10/03",
            "10/04",
            "10/05",
            "10/06",
            "10/07",
            "10/08",
            "10/09",
            "10/10"
          ]
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
            data: [0.25, 0.3, 0.6, 0.4, 0.5, 0.25, 0.25, 0.25, 1, 0.9  ]
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
  height: 4.5rem;
  /* height: 4.5rem; */
  background-color: #fff;
  padding-bottom: 0.12rem;
}
.top_box {
  font-size: 0.27rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  padding: 0.3rem 0 0.2rem 0.4rem;
}
.top_box > span:nth-child(1) {
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
  flex: auto;
  margin-top: 0.18rem;
}
.head_box {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: flex-end;
}
.head_box > div:nth-child(1) {
  width: 1.9rem;
  height: 0.5rem;
  background: rgba(57, 142, 245, 1);
  /* border-radius: 10px 10px 0px 0px; */
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 0.5rem;
}
.head_box > div:nth-child(2) {
  flex: auto;
  height: 0.03rem;
  background: rgba(57, 142, 245, 1);
}

ul {
  height: 100%;
  background-color: #fff;
}
li {
  display: flex;
  height: 0.8rem;
  justify-content: center;
}
li:nth-of-type(even) {
  background-color: #fafafa;
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
  height: 0.98rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.maichubtn {
  width: 6rem;
  height: 0.8rem;
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