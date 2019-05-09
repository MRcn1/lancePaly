<template>
    <div class='navHeader'>
        <header class="layout-header">
            <div class="img">
                <img src="../../../assets/logo.png" alt="">
            </div>
            <div class="title">
                <span>莱麦支付中心</span>
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
        height: 60px;
        background-color: rgb(70, 76, 91);
        color: #fff;

        .img {
            display: inline-block;
            width: 150px;
            height: 60px;
            padding-top: 10px;
            padding-left: 50px;
            img {
                width: 50px;
                height: 50px;
            }
        }
        .title{
            display: inline-block;
            font-size: 25px;
            font-weight: 600;
            height: 60px;
        }
    }
</style>