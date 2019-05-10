<template>
    <div class='navHeader'>
        <header class="layout-header">
            <div class="img">
                <img src="../../../assets/logo2.png" alt="">
            </div>
            <div class="title">
                <span>莱麦支付中心</span>
            </div>
            <div class="titleSmall">
                <span>广州祥发有限公司</span>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: null,
            }
        },
        components: {

        },
        created() {
            this.routes = this.$router.options.routes.slice(1)
        },
        methods: {

        },
    }
</script>

<style scoped lang='less'>
    .layout-header {
        width: 100%;
        height: 65px;
        background-color: rgb(70, 76, 91);
        color: #fff;
        position: relative;
        .img {
            display: inline-block;
            width: 250px;
            position: absolute;
            top: 17px;
            left: 34px;
            img {
                width: 178px;
                height: 32px;
            }
        }
        .title{
            display: inline-block;
            font-size: 22px;
            font-weight: 600;
            position: absolute;
            top: 17px;
            left: 265px;
        }
        .titleSmall{
            display: inline-block;
            font-size: 14px;
            color: #cacbbc;
            position: absolute;
            top: 30px;
            left: 409px;
        }
    }
</style>