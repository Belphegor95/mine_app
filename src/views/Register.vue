<template>
  <div class="register">
    <breadcrumb></breadcrumb>
    <!-- 注册信息 -->
    <ul class="zhuce" v-if="$store.getters.get_typeid == 1">
      <li>
        <span>推荐人</span>
        <van-field maxlength="20" :readonly="is_ptel" v-model="ptel" placeholder="请输入推荐人" />
      </li>
      <li>
        <span>
          <i>*</i>手机号
        </span>
        <van-field maxlength="20" v-model="us_tel" type="digit" placeholder="请输入您的手机号" />
      </li>
      <li>
        <span>
          <i>*</i>昵称
        </span>
        <van-field maxlength="20" v-model="us_nickname" placeholder="请输入您的昵称" />
      </li>
      <li>
        <span>
          <i>*</i>登录密码
        </span>
        <van-field maxlength="20" type="password" v-model="us_pwd" placeholder="请输入登录密码" />
      </li>
      <li>
        <span>
          <i>*</i>确认密码
        </span>
        <van-field maxlength="20" type="password" v-model="us_pwd_" placeholder="请再次输入登录密码" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field maxlength="20" v-model="code" type="digit" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <!-- 个人资料 -->
    <div v-else-if="$store.getters.get_typeid == 2" style="width:100%;height:100%">
      <ul class="geren">
        <li>
          <span>推荐人</span>
          <van-field maxlength="20" v-model="user.ptel" placeholder="暂无" readonly />
        </li>
        <li>
          <span>
            <i>*</i>手机号
          </span>
          <van-field maxlength="20" v-model="user.us_tel" placeholder="暂无" readonly />
        </li>
        <li>
          <span>
            <i>*</i>昵称
          </span>
          <van-field maxlength="20" v-model="user.us_nickname" placeholder="暂无" readonly />
        </li>
      </ul>
      <div class="geren_box">
        <div @click="password(21)">
          <span>登录密码</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div @click="password(22)">
          <span>支付密码</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div @click="password(23)">
          <span>支付宝账号</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div @click="password(24)">
          <span>银行卡账号</span>
          <img src="../assets/img/moreimg.png" />
        </div>
        <div style="margin-top: 0.15rem" @click="password(25)">
          <span>实名认证</span>
          <img src="../assets/img/moreimg.png" />
        </div>
      </div>
    </div>
    <!-- 更改登录密码 -->
    <ul class="mima" v-else-if="$store.getters.get_typeid == 21">
      <li>
        <span>新登录密码</span>
        <van-field maxlength="20" v-model="us_pwd" type="password" placeholder="请输入登录密码" />
      </li>
      <li>
        <span>确认登录密码</span>
        <van-field maxlength="20" v-model="us_pwd_" type="password" placeholder="请再次输入登录密码" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field maxlength="20" v-model="code" type="digit" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <!-- 更改支付密码 -->
    <ul class="zhifumima" v-else-if="$store.getters.get_typeid == 22">
      <li>
        <span>新支付密码</span>
        <van-field maxlength="20" v-model="us_safe_pwd" type="password" placeholder="请输入支付密码" />
      </li>
      <li>
        <span>确认支付密码</span>
        <van-field maxlength="20" v-model="us_safe_pwd_" type="password" placeholder="请再次输入支付密码" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field maxlength="20" v-model="code" type="digit" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <!-- 绑定支付宝账号 -->
    <ul class="zhifuzhanghao" v-else-if="$store.getters.get_typeid == 23">
      <li>
        <span>支付宝账号</span>
        <van-field maxlength="20" v-model="ali_account" type="digit" placeholder="请输入支付宝账号" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field maxlength="20" v-model="code" type="digit" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <!-- 绑定银行卡账号 -->
    <ul class="yinhangzhanghao" v-else-if="$store.getters.get_typeid == 24">
      <li>
        <span>开户银行</span>
        <van-field maxlength="20" v-model="us_bank" placeholder="请输入银行名称" />
      </li>
      <li>
        <span>持卡人姓名</span>
        <van-field maxlength="20" v-model="us_bank_person" placeholder="请输入持卡人姓名" />
      </li>
      <li>
        <span>银行卡号</span>
        <van-field maxlength="20" v-model="bank_account" type="digit" placeholder="请输入银行卡号" />
      </li>
      <li>
        <span>开户行地址</span>
        <van-field maxlength="20" v-model="bank_place" placeholder="请输入银行卡开户行地址" />
      </li>
      <li>
        <span>短信验证</span>
        <van-field maxlength="20" v-model="code" type="digit" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <!-- 实名认证 -->
    <ul class="shiming" v-else-if="$store.getters.get_typeid == 25">
      <li>
        <span>真实姓名</span>
        <van-field
          maxlength="20"
          v-if="user.us_name == '' ||  user.us_name == null"
          v-model="us_name"
          placeholder="请输入真实姓名"
        />
        <van-field maxlength="20" v-else readonly v-model="user.us_name" placeholder="请输入真实姓名" />
      </li>
      <li style="margin-bottom: 0.5rem">
        <span>身份证号</span>
        <van-field
          maxlength="20"
          v-if="user.us_id_card  == '' || user.us_id_card == null"
          v-model="us_id_card"
          placeholder="请输入身份证号"
        />
        <van-field maxlength="20" v-else readonly v-model="user.us_id_card" placeholder="请输入身份证号" />
      </li>
      <div class="shenfen_box">
        <van-uploader
          v-model="us_card_front_pic"
          :preview-image="false"
          accept="image/*"
          v-if="user.us_card_front_pic == '' || user.us_card_front_pic == null"
        >
          <div v-if="us_card_front_pic.length == 0" class="upimg"></div>
          <img v-else :src="us_card_front_pic[0].content" class="upimg" />
        </van-uploader>
        <img v-else :src="$api.baseUrl + user.us_card_front_pic" class="upimg" />
        <p>身份证正面</p>
      </div>
      <div class="shenfen_box">
        <van-uploader
          v-model="us_card_reverse_pic"
          :preview-image="false"
          accept="image/*"
          v-if="user.us_card_reverse_pic == '' || user.us_card_reverse_pic == null"
        >
          <div v-if="us_card_reverse_pic.length == 0" class="upimg"></div>
          <img v-else :src="us_card_reverse_pic[0].content" class="upimg" />
        </van-uploader>
        <img v-else :src="$api.baseUrl + user.us_card_reverse_pic" class="upimg" />
        <p>身份证反面</p>
      </div>
    </ul>
    <!-- 联系客服 -->
    <div v-else-if="$store.getters.get_typeid == 7">
      <ul class="kefu" v-for="(item,index) in contacts?contacts:''" :key="index">
        <li v-for="(v1,i) in item" :key="i">
          <span>{{`${index == 0?'客服电话':index == 1?'客服微信':'客服QQ'}${i}`}}</span>
          <van-field maxlength="20" :value="v1" readonly />
        </li>
      </ul>
    </div>
    <!-- 忘记密码 -->
    <ul class="shiming" v-else-if="$store.getters.get_typeid == 26">
      <li>
        <span>手机号</span>
        <van-field maxlength="20" v-model="us_tel" type="digit" placeholder="请输入您的手机号" />
      </li>
      <li>
        <span>登录密码</span>
        <van-field maxlength="20" type="password" v-model="us_pwd" placeholder="请输入登录密码" />
      </li>
      <li>
        <span>确认密码</span>
        <van-field maxlength="20" type="password" v-model="us_pwd_" placeholder="请再次输入登录密码" />
      </li>
      <li style="padding-bottom: 0.5rem;">
        <span>短信验证</span>
        <van-field maxlength="20" v-model="code" type="digit" />
        <van-button class="fasongbtn" type="info">发送</van-button>
      </li>
    </ul>
    <van-popup class="modal_box" v-model="fullModal">
      <h4>完善信息</h4>
      <p>您的其他信息不完整,请完善信息</p>
      <div class="btn_box">
        <span @click="onNoFull">取消</span>
        <span @click="onFull">确定</span>
      </div>
    </van-popup>
    <div
      class="queding_box"
      v-show="isBtn"
      v-if="$store.getters.get_typeid != 7 && $store.getters.get_typeid != 2"
    >
      <van-button @click="determine" class="quedingbtn" type="info">确定</van-button>
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
      user: this.$store.state.user,
      text: "",
      text1: "",
      ptel: "", // 推荐人手机号或账号
      code: "", // 验证码 （测试期间可以随机填数字）
      us_nickname: "", // 昵称
      us_pwd: "", // 登录密码
      us_pwd_: "", // 确认密码
      us_tel: "", // 手机号码
      us_safe_pwd: "", // 支付密码
      us_safe_pwd_: "", // 确认支付密码
      ali_account: "", // 支付宝账号
      us_bank: "", // 银行名称
      bank_place: "", // 开户行地址
      us_bank_person: "", // 持卡人
      bank_account: "", // 银行卡号
      us_name: "", //真实姓名
      us_id_card: "", // 身份证号
      us_card_front_pic: [], //身份证正面
      us_card_reverse_pic: [], //身份证反面
      contacts: [], // 客服
      is_ptel: false,
      isBtn: true,
      fullModal: false
    };
  },
  watch: {
    "$store.getters.get_typeid": function() {
      this.text = "";
      this.ptel = ""; // 推荐人手机号或账号
      this.code = ""; // 验证码 （测试期间可以随机填数字）
      this.us_nickname = ""; // 昵称
      this.us_pwd = ""; // 登录密码
      this.us_pwd_ = ""; // 确认密码
      this.us_tel = ""; // 手机号码
      this.us_safe_pwd = ""; // 支付密码
      this.us_safe_pwd_ = ""; // 确认支付密码
      // this.ali_account = ""; // 支付宝账号
      // this.us_bank = ""; // 银行名称
      // this.bank_place = ""; // 开户行地址
      // this.us_bank_person = ""; // 持卡人
      // this.bank_account = ""; // 银行卡号
      this.ali_account = this.user.ali_account;
      this.us_bank = this.user.us_bank; // 银行名称
      this.bank_place = this.user.bank_place; // 开户行地址
      this.us_bank_person = this.user.us_bank_person; // 持卡人
      this.bank_account = this.user.bank_account; // 银行卡号
      this.us_name = this.user.us_name; //真实姓名
      this.us_id_card = this.user.us_id_card; // 身份证号
      this.us_card_front_pic = []; //身份证正面
      this.us_card_reverse_pic = []; //身份证反面
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.$store.commit("show_typeid", 1);
      this.is_ptel = true;
      this.$nextTick(() => {
        this.ptel = this.$route.query.id ? this.$route.query.id : "";
      });
    }
    if (this.$store.getters.get_typeid == 7) {
      this.getcontact();
    }
  },
  methods: {
    determine: function() {
      // 确定
      let type = this.$store.getters.get_typeid;
      if (type == 1) {
        if (this.us_tel.trim() == "") {
          this.$toast("手机号输入有误");
          return;
        } else if (this.us_nickname.trim() == "") {
          this.$toast("昵称输入有误");
          return;
        } else if (this.us_pwd.trim() == "" || this.us_pwd_.trim() == "") {
          this.$toast("两次密码输入有误");
          return;
        } else if (this.us_pwd.trim() != this.us_pwd_.trim()) {
          this.$toast("两次密码输入有误");
          return;
        } else if (this.code.trim() == "") {
          this.$toast("验证码输入有误");
          return;
        }
        this.register();
      } else if (type == 21) {
        if (this.us_pwd.trim() != this.us_pwd_.trim()) {
          this.$toast("两次密码输入有误");
          return;
        } else if (this.us_pwd.trim() == "" || this.us_pwd_.trim() == "") {
          this.$toast("密码输入有误");
          return;
        } else if (this.code.trim() == "") {
          this.$toast("验证码输入有误");
          return;
        }
        this.changePwd();
      } else if (type == 22) {
        if (this.us_safe_pwd.trim() != this.us_safe_pwd_.trim()) {
          this.$toast("两次密码输入有误");
          return;
        } else if (
          this.us_safe_pwd.trim() == "" ||
          this.us_safe_pwd_.trim() == ""
        ) {
          this.$toast("密码输入有误");
          return;
        } else if (this.code.trim() == "") {
          this.$toast("验证码输入有误");
          return;
        }
        this.changeSafe();
      } else if (type == 23) {
        if (this.ali_account.trim() == "") {
          this.$toast("支付宝账号输入有误");
          return;
        } else if (this.code.trim() == "") {
          this.$toast("验证码输入有误");
          return;
        }
        this.bindAlipay();
      } else if (type == 24) {
        if (this.us_bank.trim() == "") {
          this.$toast("银行名称输入有误");
          return;
        } else if (this.us_bank_person.trim() == "") {
          this.$toast("持卡人输入有误");
          return;
        } else if (this.bank_account.trim() == "") {
          this.$toast("银行卡号输入有误");
          return;
        } else if (this.bank_place.trim() == "") {
          this.$toast("开户行地址输入有误");
          return;
        } else if (this.code.trim() == "") {
          this.$toast("验证码输入有误");
          return;
        }
        this.blindBank();
      } else if (type == 25) {
        if (this.us_name.trim() == "") {
          this.$toast("真实姓名输入有误");
          return;
        } else if (this.us_id_card.trim() == "") {
          this.$toast("身份证输入有误");
          return;
        } else if (this.us_card_front_pic.length == 0) {
          this.$toast("身份证正面没有上传");
          return;
        } else if (this.us_card_reverse_pic.length == 0) {
          this.$toast("身份证反面没有上传");
          return;
        }
        this.realname();
      } else if (type == 26) {
        if (this.us_tel.trim() == "") {
          this.$toast("手机号输入有误");
          return;
        } else if (this.us_pwd.trim() == "" || this.us_pwd_.trim() == "") {
          this.$toast("两次密码输入有误");
          return;
        } else if (this.us_pwd.trim() != this.us_pwd_.trim()) {
          this.$toast("两次密码输入有误");
          return;
        } else if (this.code.trim() == "") {
          this.$toast("验证码输入有误");
          return;
        }
        this.forget();
      }
    },
    forget: function() {
      // 忘记密码
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.every_forget, {
        us_tel: this.us_tel,
        us_pwd: this.us_pwd,
        code: this.code
      })
        .then(data => {
          if (data.code == 200) {
            this.$toast({
              message: data.msg,
              onClose: () => {
                this.$router.go(-1);
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    register: function() {
      // 注册账号
      let obj = {};
      if (this.ptel == "") {
        obj = {
          us_pwd: this.us_pwd,
          us_tel: this.us_tel,
          code: this.code,
          us_nickname: this.us_nickname
        };
      } else {
        obj = {
          us_pwd: this.us_pwd,
          us_tel: this.us_tel,
          ptel: this.ptel,
          code: this.code,
          us_nickname: this.us_nickname
        };
      }
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.every_register, obj)
        .then(data => {
          if (data.code == 200) {
            this.$toast({
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                this.$router.push("/");
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    changePwd: function() {
      // 修改密码
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.user_changePwd, {
        us_pwd: this.us_pwd,
        us_tel: this.us_tel
      })
        .then(data => {
          if (data.code == 200) {
            this.$toast({
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                window.localStorage.password = this.us_pwd;
                this.$store.commit("show_typeid", 2);
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    changeSafe: function() {
      // 修改支付密码
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.user_changeSafe, {
        us_safe_pwd: this.us_safe_pwd,
        us_tel: this.us_tel
      })
        .then(data => {
          if (data.code == 200) {
            let user = this.$store.state.user;
            user.us_safe_pwd = this.us_safe_pwd;
            this.$toast({
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                if (this.isuser_full() != 2) {
                  this.fullModal = true;
                } else {
                  this.$store.commit("show_typeid", 2);
                }
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    bindAlipay: function() {
      // 绑定支付宝账号
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.user_bindAlipay, {
        code: this.code,
        account: this.ali_account
      })
        .then(data => {
          if (data.code == 200) {
            let user = this.$store.state.user;
            user.ali_account = this.ali_account;
            this.$toast({
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                if (this.isuser_full() != 2) {
                  this.fullModal = true;
                } else {
                  this.$store.commit("show_typeid", 2);
                }
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    blindBank: function() {
      // 绑定银行卡
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.user_blindBank, {
        code: this.code,
        us_bank: this.us_bank,
        bank_place: this.bank_place,
        us_bank_person: this.us_bank_person,
        bank_account: this.bank_account
      })
        .then(data => {
          if (data.code == 200) {
            let user = this.$store.state.user;
            user.us_bank = this.us_bank;
            user.bank_place = this.bank_place;
            user.us_bank_person = this.us_bank_person;
            user.bank_account = this.bank_account;
            this.$toast({
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                if (this.isuser_full() != 2) {
                  this.fullModal = true;
                } else {
                  this.$store.commit("show_typeid", 2);
                }
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    realname: function() {
      // 实名认证
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: "加载中...",
        forbidClick: true
      });
      this.token_post(this.$api.user_realname, {
        us_name: this.us_name,
        us_id_card: this.us_id_card,
        us_card_front_pic: this.us_card_front_pic[0].content,
        us_card_reverse_pic: this.us_card_reverse_pic[0].content
      })
        .then(data => {
          if (data.code == 200) {
            let user = this.$store.state.user;
            user.us_name = this.us_name;
            user.us_id_card = this.us_id_card;
            this.$toast({
              message: data.msg,
              forbidClick: true,
              onClose: () => {
                this.getuser();
                this.$store.commit("show_typeid", 2);
              }
            });
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    getuser: function() {
      this.token_get(this.$api.user_login)
        .then(data => {
          if (data.code == 200) {
            this.user = data.data;
            this.$store.commit("show_user", data.data);
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    getcontact: function() {
      // 联系客服
      this.axios
        .post(this.$api.index_contact)
        .then(data => {
          if (data.code == 200) {
            // console.info(data);
            this.contacts = data.data;
            var arr1 = [],
              arr2 = [],
              arr3 = [];
            try {
              for (let i = 0; i < this.contacts.length; i++) {
                let item = this.contacts[i];
                if (Object.keys(item).length < 0) {
                  return (this.contacts = []);
                }
                for (let j = 0; j < Object.keys(item).length; j++) {
                  if (
                    (Object.keys(item)[j] + "").indexOf("tel") != -1 &&
                    item[eval("Object.keys(item)[j]")]
                  ) {
                    arr1.push(item[eval("Object.keys(item)[j]")]);
                  } else if (
                    (Object.keys(item)[j] + "").indexOf("wechat") != -1 &&
                    item[eval("Object.keys(item)[j]")]
                  ) {
                    arr2.push(item[eval("Object.keys(item)[j]")]);
                  } else if (
                    (Object.keys(item)[j] + "").indexOf("qq") != -1 &&
                    item[eval("Object.keys(item)[j]")]
                  ) {
                    arr3.push(item[eval("Object.keys(item)[j]")]);
                  }
                }
              }
            } catch (err) {
              this.contacts = [];
            }
            this.contacts = [arr1, arr2, arr3];
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(() => {
          this.$toast.fail(this.$api.monmsg);
        });
    },
    isuser_full: function() {
      let user = this.user;
      if (!user.us_safe_pwd || user.us_safe_pwd == null) {
        return 22;
      } else if (!user.ali_account || user.ali_account == null) {
        return 23;
      } else if (!user.us_bank || user.us_bank == null) {
        return 24;
      }
      return 2;
    },
    onFull: function() {
      this.fullModal = false;
      this.$store.commit("show_typeid", this.isuser_full());
    },
    onNoFull: function() {
      this.fullModal = false;
      this.$store.commit("show_typeid", 2);
    },
    password: function(id) {
      if (id == 25) {
        // console.info()
        if (!this.user.us_name || this.user.us_name != null) {
          this.isBtn = false;
        } else {
          this.isBtn = true;
        }
      } else {
        this.isBtn = true;
      }
      this.$store.commit("show_typeid", id);
      this.code = "";
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
  overflow-y: scroll;
}
.register::-webkit-scrollbar {
  display: none;
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
.kefu {
  padding-bottom: 0.4rem !important;
  margin-bottom: 0.5rem;
}
.geren {
  padding-bottom: 0.6rem;
}
/* .geren_box {
  background: #fff;
} */
.geren_box > div {
  background: #fff;
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
  height: 0.7rem;
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
  line-height: 0.7rem !important;
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
  line-height: 0.7rem;
  border-radius: 0.35rem;
}

.shenfen_box {
  font-size: 0.26rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
}
.upimg {
  width: 2.9rem;
  height: 1.9rem;
  background: rgba(246, 246, 246, 1);
}
</style>

<style>
.register .van-cell {
  background: #f6f6f6;
  padding: 0 16px !important;
}
.register .van-cell {
  flex: auto;
  width: 0px !important;
}
.register .van-cell > div {
  display: flex;
}
</style>