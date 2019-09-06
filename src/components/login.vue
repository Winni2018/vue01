<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="manage_tip">
          <p>后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input  placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>

</script>

<style scoped>
  .login_page {
    background-color: #324057;
    width: 100%;

    height:100%;
    text-align: center;
  }

  .manage_tip {
    /* position: absolute; */
    width: 100%;
    /* top: -100px; */
    left: 0;
  }
  .manage_tip p {
    font-size: 34px;
    padding: 20px 0;
  }
  .form_contianer {
    position: absolute;
    left: calc(50% - 190px);
    top: calc(50% - 210px);
    /* .wh(320px, 210px);
    .ctp(320px, 210px); */
    width: 320px;
    /* height: 210px; */
    padding: 30px;
    /* box-sizing: border-box; */
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
  }
.submit_btn{
  width: 300px;
  background-color: dodgerblue;
}
</style>
