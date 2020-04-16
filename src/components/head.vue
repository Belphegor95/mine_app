<template>
  <div class="box">
    <img src="../assets/img/logoimg.png" />
    <span>项目名称</span>
  </div>
</template>

<script>
export default {
  name: "head_",
  data: function() {
    return {};
  },
  methods: {
    back: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  padding: 0.3rem 0.27rem;
  background: #fff;
}
.box > img {
  /* width: 0.24rem; */
  height: 0.5rem;
}
.box > span {
  font-size: 0.32rem;
  font-family: Adobe Heiti Std;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  line-height: 0.5rem;
  margin-left: 0.27rem;
}
</style>