<template>
    <div class="login">
        <el-row>
            <el-col :span="24">
                <div class="headerlogo">
                    <div class="headerlogo-logo">
                        <img src="../assets/login_03.png" alt="" width="103" height="83">
                        <span class="headerlogo-txt">莱麦支付中心运营后台</span>
                    </div>
                </div>
                <div class="box">
                    <div class="fromBox">
                        <div class="accountLogin">
                            账户登录
                        </div>
                        <div class="inpitBtn">
                            <div class="inputBox">
                                <el-input placeholder="请输入收银员账号" prefix-icon=" " v-model="lance1"></el-input>
                                <i class="inputIcon"><img src="../assets/login_031_08.png" alt=""></i>
                            </div>
                            <div class="inputBox" style="margin-top:44px;">
                                <el-input placeholder="请输入收银员账号" show-password prefix-icon=" " v-model="lance2"></el-input>
                                <i class="inputIcon"><img src="../assets/login_031_17.png" alt=""></i>
                            </div>
                            <div class="forgetPassword">
                                忘记密码请联系管理员
                            </div>
                            <div class="logInBtn" @click="login">
                                登录
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    Copyright © 广州市莱麦互联网科技有限公司
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lance1: '',
                lance2: '',
            }
        },
        components: {

        },
        created() {

        },
        methods: {
            login() {
                this.$router.push({ path: '/index' })
            }
        },
    }
</script>

<style scoped lang='less'>
    .headerlogo {
        width: 40%;
        min-width: 400px;
        height: 100px;
        padding-top: 5px;

        .headerlogo-logo {
            width: 390px;
            height: 90px;
            float: right;
        }

        .headerlogo-txt {
            vertical-align: bottom;
            font-size: 28px;
            color: #4c4e4e;
            font-weight: 600;
        }
    }

    .box {
        width: 100%;
        height: 750px;
        background-image: url('../assets/login_06.png');
        background-size: 100% 100%;
        position: relative;

        .fromBox {
            width: 460px;
            height: 463px;
            background-color: #ffffff;
            box-shadow: 0px 16px 27px 0px rgba(0, 0, 0, 0.13);
            border-radius: 4px;
            position: absolute;
            right: 10%;
            top: 20%;

            .accountLogin {
                font-size: 20px;
                color: #333333;
                text-align: center;
                margin-top: 39px;
            }

            .inpitBtn {
                width: 366px;
                height: 300px;
                margin: 0 auto;
                margin-top: 42px;

                .inputBox {
                    position: relative;
                }

                .inputIcon {
                    position: absolute;
                    top: 12px;
                    left: 12px;

                    img {
                        width: 27px;
                        height: 27px;
                    }
                }

                .forgetPassword {
                    padding-top: 10px;
                    text-align: right;
                    font-size: 16px;
                    color: #cccccc;
                }

                .logInBtn {
                    width: 366px;
                    height: 46px;
                    background-color: #f4a142;
                    border-radius: 4px;
                    text-align: center;
                    color: #fff;
                    line-height: 46px;
                    font-size: 20px;
                    margin-top: 53px;
                    cursor: pointer;
                }
            }
        }
    }

    .copyright {
        font-size: 16px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #999999;
        text-align: center;
        padding-top: 10px;
    }
</style>


<style lang='less'>
    .login {
        .el-input__inner {
            height: 50px !important;
            padding-left: 50px;
        }

    }
</style>