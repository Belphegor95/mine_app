<template>
  <div class="register">
    <breadcrumb></breadcrumb>
    <ul class="zhuce" v-if="typeid === 1">
      <li>
        <span>推荐人</span>
        <van-field v-model="text" placeholder="103164" />
      </li>
      <li>
        <span>
          <i>*</i>手机号
        </span>
        <van-field v-model="text" placeholder="请输入您的手机号" />
      </li>
      <li>
        <span>
          <i>*</i>昵称
        </span>
        <van-field v-model="text" placeholder="请输入您的昵称" />
      </li>
      <li>
        <span>
          <i>*</i>登录密码
        </span>
        <van-field v-model="text" placeholder="请输入登录密码" />
      </li>
      <li>
        <span>
          <i>*</i>确认密码
        </span>
        <van-field v-model="text" placeholder="请再次输入登录密码" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field v-model="text" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <div v-else-if="typeid === 2" style="width:100%;height:100%">
      <ul>
        <li>
          <span>推荐人</span>
          <van-field v-model="text" placeholder="103164" />
        </li>
        <li>
          <span>
            <i>*</i>手机号
          </span>
          <van-field v-model="text" placeholder="请输入您的手机号" />
        </li>
        <li>
          <span>
            <i>*</i>昵称
          </span>
          <van-field v-model="text" placeholder="请输入您的昵称" />
        </li>
      </ul>
      <div class="geren_box">
        <div @click="password(3)">
          <span>登录密码</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div @click="password(4)">
          <span>支付密码</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div @click="password(5)">
          <span>支付宝账号</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div @click="password(6)">
          <span>银行卡账号</span>
          <img src="../assets/img/moreimg.png" />
        </div>
      </div>
    </div>
    <!-- 更改登录密码 -->
    <ul class="mima" v-else-if="typeid === 3">
      <li>
        <span>新登录密码</span>
        <van-field v-model="text" placeholder="请输入登录密码" />
      </li>
      <li>
        <span>确认登录密码</span>
        <van-field v-model="text" placeholder="请再次输入登录密码" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field v-model="text" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <ul class="zhifumima" v-else-if="typeid === 4">
      <li>
        <span>新支付密码</span>
        <van-field v-model="text" placeholder="请输入支付密码" />
      </li>
      <li>
        <span>确认支付密码</span>
        <van-field v-model="text" placeholder="请再次输入支付密码" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field v-model="text" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <ul class="zhifuzhanghao" v-else-if="typeid === 5">
      <li>
        <span>支付宝账号</span>
        <van-field v-model="text" placeholder="13644444444" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field v-model="text" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <ul class="yinhangzhanghao" v-else-if="typeid === 6">
      <li>
        <span>开户银行</span>
        <van-field v-model="text" placeholder="请输入银行名称" />
      </li>
      <li>
        <span>持卡人姓名</span>
        <van-field v-model="text" placeholder="请输入持卡人姓名" />
      </li>
      <li>
        <span>银行卡号</span>
        <van-field v-model="text" placeholder="请输入银行卡号" />
      </li>
      <li>
        <span>开户行地址</span>
        <van-field v-model="text" placeholder="请输入银行卡开户行地址" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field v-model="text" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <ul class="kefu" v-else-if="typeid === 7">
      <li>
        <span>联系电话</span>
        <van-field v-model="text" placeholder="13666666666" />
      </li>
      <li>
        <span>微信</span>
        <van-field v-model="text" placeholder="13666666666" />
      </li>
    </ul>
    <div class="queding_box" v-if="typeid != 7">
      <van-button class="quedingbtn" type="info">确定</van-button>
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
  methods: {
    password: function(id) {
      this.typeid = id;
      this.$store.commit("show_typeid", id);
    }
  }
};
</script>

<style scoped>
.register {
  background: #f7f7f7;
  position: relative;
  height: 100%;
  width: 100%;
}
ul {
  background: #fff;
}
.zhuce,
.mima,
.zhifumima,
.zhifuzhanghao,
.yinhangzhanghao,
.kefu {
  padding-bottom: 1rem;
}
.geren {
  padding-bottom: 0.6rem;
}
.geren_box {
  background: #fff;
}
.geren_box > div {
  border-top: 1px solid #f7f7f7;
  height: 1rem;
  padding: 0 0.3rem 0 0.31rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.geren_box > div > img {
  height: 0.3rem;
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
.fasongbtn {
  width: 1.8rem;
  height: 0.7rem;
  margin-left: 0.4rem;
}
i {
  color: #fd1a1a;
}

/* 确定 */
.queding_box {
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
</style>

<style>
.register .van-cell {
  background: #f6f6f6;
  height: 0.7rem;
}
.register .van-cell {
  flex: auto;
  width: 0px !important;
}
</style>