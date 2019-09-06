<template>
  <div class="container" style="overflow: hidden">
    <div>
      <el-header style='background-color:#373d41' class='main-header'>
        <div class="main-img-box">
					<span class="merchant">
                    	<img src="../assets/logo.png" style=""/>
                    </span>
          <span class="merchant" style="width: 200px;margin-left: 10px;font-size: 14px;">
                    	后台管理系统
                    </span>
        </div>
        <div class="main-func-box">
          <ul class="appNav">
            <li>欢迎管理员</li>
          </ul>
          <a class="appA">修改密码</a>
          <a class="appA">退出</a>
        </div>
      </el-header>
    </div>
    <el-container style="height: 100%;">
      <el-aside>
        <el-menu class="el-menu-vertical-demo"  background-color="#545c64" text-color="#fff" active-text-color="#409EFF"  :default-active="activedMenu($route.path)">
          <el-submenu index="1" >
            <template slot="title">首页</template>
            <el-menu-item index="carousel" class="p-60">轮播图管理</el-menu-item>
            <el-menu-item index="travelNotes" class="p-60">精选游记管理</el-menu-item>
            <el-menu-item index="platform" class="p-60">平台条款</el-menu-item>
          </el-submenu>
          <el-menu-item index="userManagement">
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="examine">
            <span slot="title">游记管理</span>
          </el-menu-item>

          <el-menu-item index="flight">
            <span slot="title">航班信息</span>
          </el-menu-item>
          <el-menu-item index="business">
            <span slot="title">商家管理</span>
          </el-menu-item>
          <el-menu-item index="route">
            <span slot="title">路线管理</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">订单管理</template>
            <el-menu-item index="ordermanagement" class="p-60">订单管理</el-menu-item>
            <el-menu-item index="intervention" class="p-60">订单介入</el-menu-item>

          </el-submenu>
          <el-submenu index="5">
            <template slot="title">角色管理</template>
            <!--<el-menu-item index="addrole">添加角色</el-menu-item>-->
            <el-menu-item index="auditor" class="p-60">客服管理</el-menu-item>
            <el-menu-item index="service" class="p-60">管理员管理</el-menu-item>
          </el-submenu>
          <el-menu-item index="price">
            <span slot="title">价格管理</span>
          </el-menu-item>

        </el-menu>

      </el-aside>
      <el-dialog title="修改密码">
        <div>
          <el-form label-width="80px">
            <el-form-item label="账号">
              <el-input :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="原密码">
              <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item label=" ">
              <div style="font-size: 12px;color: #909399;">*新密码请设置为字母与数字混合,8-20位。</div>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
         	 <el-button type="primary" >修改</el-button>
             <el-button >取消</el-button>
            </span>
      </el-dialog>
      <router-view />

      <el-container>


        <el-main>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {

    },
    watch: {


    },
    methods: {

      //默认页面显示
      activedMenu: function (val) {

        if (val.indexOf('/management') == 0) {
          return '/authorityList'

        }
      },
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar {
    width: 0 !important;height: 0;
  }
  .container {
    width: 100%;
    height: 100%;
    /*border: 1px solid red;*/
  }


  .main-header {
    display: flex;
    justify-content: space-between;
    padding: 0;
    height:60px !important;
  }

  .main-img-box {
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }

  .main-img-box img {
    width: auto;
    height: 40px;
    margin-left: 34px;
  }

  .main-func-box {
    /*width: 100px;*/
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    height: 60px;
  }

  .main-func-box img {
    margin-right: 14px;
    padding-left: 10px;
    width: 22px;
    height: 22px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: calc(100vh - 50px);
  }

  .tableFunc div {
    display: inline-block;
    width: 100%;
    float: right;
  }

  .merchant {
    display: inline-block;
    /* width: 100%;*/
    color: #fff;
    /* text-align: center;*/
  }

  .appNav>li {
    float: right;
    padding: 0 3px;
    color: #fff;
    font-size: 14px;
  }

  .appA {
    margin: 0 5px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
