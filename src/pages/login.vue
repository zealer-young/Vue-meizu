<template>
  <div class="container">
  <div class="content">
    <div class="ucSimpleHeader" id="header">
      <a href="/#/index" class="meizuLogo" alt>
        <i class="i_icon">
          <img src="../../public/imgs/login/meizu-login-logo.png" alt />
        </i>
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder=" test账号：young " v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder=" test密码：young " v-model="password" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="reg">
              <a ref="javascript:;" class="reg-a" @click="regist">立即注册</a>
              <a ref="javascript:;" class="reg-a" @click="regist">忘记密码？</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <new-footer class="content"></new-footer>
  </div>
</template>
<script>
//mapActions 辅助函数
import { mapActions } from "vuex";
import NewFooter from "./../components/newFooter";
export default {
  name: "login",
  //data:{}是全局声明，可能会造成页面间数据串用；
  //data(){}是局部声明，当前页面使用
  data() {
    return {
      username: "",
      password: "",
      userId: ""
    };
  },
  components: {
    NewFooter
  },
  methods: {
    login() {
      //该处使用了ES6解构赋值,
      //也可写成 username = this.username;
      //        password = this.password;
      let { username, password } = this;
      console.log("username:", username);
      console.log("password:", password);
      this.axios
        .post("/user/login", {
          username: username,
          password: password
        })
        //需要注意res，避免声明未使用导致ESLint检查会报错（不属于语法或使用错误，是声明未使用导致的）
        .then(res => {
          console.log("success--------");
          //cookie具体适用语法参看 npm cookie 具体方法
          this.$cookie.set("userId", res.id, { expires: "Session" }); //expires: "Session" 过期时间：会话级别

          //触发action
          // this.$store.dispatch('saveUserName',res.username);

          //mapActions 辅助函数
          this.saveUserName(res.username);

          this.$router.push({
            name: "index",
            params: {
              from: "login"
            }
          });
        });
    },
    //mapActions 辅助函数
    ...mapActions(["saveUserName"]),
    //register（）是当前页面用户注册方法
    register() {
      this.axios
        .post("/user/register", {
          username: "young",
          password: "young",
          email: "young@163.com"
        })
        .then(() => {
          this.$message.success("注册成功");
        });
    },
    regist() {
      setTimeout(() => {
        this.$message.success({
          duration: 5000,
          message: "该功能正在开发 test账号：young ; test密码：young"
        });
      }, 700);
    }
    //element-ui message.success/info/warning/error()语法格式之一
    //post传参，声明用户名，密码，邮箱等
    //在控制台Network-XHR-Preview下查看数据返结果
  }
};
</script>
<style lang="scss">
.content {
  width: 100%;
  position: relative;
  div {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
  }
  .ucSimpleHeader {
    height: auto;
    padding-bottom: 40px;
    margin: 0 auto;
    position: relative;
    max-width: 1200px;
    .meizuLogo {
      float: left;
      height: 23px;
      width: 110px;
      padding-bottom: 20px;
      overflow: hidden;
      display: block;
    }
    a {
      color: #515151;
      text-decoration: none;
      .i_icon {
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
          position: absolute;
          top: 25px;
          width: 111px;
          height: 24px;
        }
      }
    }
  }
  & > .container {
    position: relative;
    min-height: 750px;
    max-height: 1080px;
    background: linear-gradient(180deg, #edfcfd 0%, #faffff 100%);
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("../../public/imgs/login/meizu-login-bg.png") no-repeat
      center;
    .container {
      width: 100%;
      height: 576px;
      .login-form {
        box-sizing: border-box;
        padding: 85px 35px 10px 35px;
        width: 368px;
        height: 475px;
        background-color: #ffffff;
        position: absolute;
        top: 93px;
        bottom: 29px;
        right: 192px;
        h3 {
          line-height: 23px;
          font-size: 18px;
          text-align: center;
          margin: -9px auto 46px;
          font-weight: 400;
          .checked {
            color: #333;
          }
          .sep-line {
            margin: 0 32px;
          }
          span:hover {
            color: #7f7f7f;
            cursor: pointer;
          }
        }
        .input {
          display: inline-block;
          width: 298px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
          input::-webkit-input-placeholder {
              /* WebKit browsers */
              font-size: 14px;
              color: #9e9e9e;
            }
            input:-moz-placeholder {
              /* Mozilla Firefox 4 to 18 */
              font-size: 14px;
              color: #9e9e9e;
            }
            input::-moz-placeholder {
              /* Mozilla Firefox 19+ */
              font-size: 14px;
              color: #9e9e9e;
            }
            input:-ms-input-placeholder {
              /* Internet Explorer 10+ */
              font-size: 14px;
              color: #9e9e9e;
            }
        }
        .btn {
          width: 300px;
          display: block;
          height: 46px;
          font-size: 14px;
          line-height: 46px;
          text-align: center;
          *margin-bottom: 10px;
          outline: none;
          cursor: pointer;
          color: #fff;
          border-radius: 4px;
          background-color: #387aff;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #387aff;
          }
          .reg {
            width: 300px;
            display: flex;
            justify-content: space-between;
            color: #999999;
            a {
              margin: 0 1px;
            }
            a:hover {
              color: #387aff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
