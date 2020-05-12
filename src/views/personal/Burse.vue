<!-- 我的钱包 -->
<template>
  <div class="burse_box">
    <breadcrumb></breadcrumb>
    <div class="qian_box">
      <div>
        <p>矿机产出钱包</p>
        <p>{{ user.lock_money ? user.lock_money : 0.0000 }}</p>
      </div>
      <div>
        <p>商务钱包</p>
        <p>{{ user.business_money? user.business_money : 0.0000 }}</p>
      </div>
    </div>
    <ul>
      <!-- <li @click="rut_moneyrecord(1)">
        <img src="../../assets/img/personal/dealimg.png" />
        <p>提现</p>
      </li>-->
      <li @click="rut_moneyrecord(2)">
        <img src="../../assets/img/personal/dealimg.png" />
        <p>矿机钱包记录</p>
      </li>
      <li @click="rut_moneyrecord(3)">
        <img src="../../assets/img/personal/dealimg.png" />
        <p>商务钱包记录</p>
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
      user: {}
    };
  },
  created() {
    this.$store.commit("show_typeid", 106);
  },
  mounted() {
    this.login();
  },
  methods: {
    login: function() {
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
    rut_moneyrecord: function(id) {
      if (id == 1) {
        this.$store.commit("show_typeid", 10601);
        this.$router.push("/deal");
      } else if (id == 2) {
        this.$store.commit("show_typeid", 10602);
        this.$router.push("/personal/money_record");
      } else if (id == 3) {
        this.$store.commit("show_typeid", 10603);
        this.$router.push("/personal/money_record");
      }
    }
  }
};
</script>
<style scoped>
.burse_box {
  height: 100%;
  background-color: #f7f6f9;
}
.qian_box {
  display: flex;
  height: 1.6rem;
  align-items: center;
  background-color: #fff;
}
.qian_box > div {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qian_box > div > p:nth-child(1) {
  font-size: 0.22rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
.qian_box > div > p:nth-child(2) {
  font-size: 0.4rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.22rem;
}

ul {
  margin-top: 0.2rem;
  background-color: #fff;
}
li {
  height: 1rem;
  display: flex;
  align-items: center;
}
li > img {
  height: 0.43rem;
  margin: 0 0.3rem;
}
li > p {
  font-size: 0.26rem;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
}
</style>