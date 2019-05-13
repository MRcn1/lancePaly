<template>
    <div class="login">
        <el-row>
            <el-col :span="24">
                <div class="headerlogo">
                    <div class="headerlogo-logo">
                        <img src="../assets/login_03.png" alt="" width="103" height="83">
                    </div>
                </div>
                <div class="box">

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        created() {

        },
        methods: {

        },
    }
</script>

<style scoped lang='less'>
.headerlogo{
    width: 40%;
    min-width: 400px;
    height: 90px;
    background-color: red;
    .headerlogo-logo{
        width: 330px;
        height: 90px;
        background-color: blue;
        float: right;
    }
}
.box{
    width: 100%;
    height: 789px;
    background-color: pink;
}

</style>