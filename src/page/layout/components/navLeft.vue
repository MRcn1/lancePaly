<template>
    <div class='navLeft'>
        <el-col :span="4">
            <el-menu :default-openeds='openeds' class="el-menu-vertical-demo" active-text-color='#f29223' :unique-opened='true'>
                <el-menu-item class="menuItem" index="0" @click="toPath('index')" :class="'/index'==$route.path?'is-active':''">
                    <i class="imgtop"><img width="21px" height="23px" src="../../../assets/syicon_16.png" alt=""></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu :index="num+''" v-for="(item,num) in classify" :key="num">
                    <template slot="title">
                        <i class="imgtop"><img width="21px" height="23px" :src="item.icon" alt=""></i>
                        <span>{{item.top}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item :index="num+'-'+ind" v-for="(value,ind) in newchildren" :key="ind" :class="value.path==$route.path?'is-active':''" @click="toPath(value.path)" v-if="item.top==value.meta.top">{{value.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: null,
                classify: null,
                newchildren: null,
                openeds: [],
                name: '',
            }
        },
        components: {

        },
        created() {
            this.selsev()
        },
        methods: {
            selsev() {
                let classify = []
                let newchildren = []
                this.$router.options.routes.filter(res => {
                    if (res.name == this.$route.matched[0].name) {
                        res.children.filter(val => {
                            if (val.path != '' && val.path != '/index') {
                                classify.push({
                                    top: val.meta.top,
                                    icon: require('../../../assets/' + val.meta.icon)
                                })
                                newchildren.push(val)
                            }
                        })
                    }
                })
                var obj = {};
                this.classify = classify.reduce(function (item, next) {
                    obj[next.top] ? '' : obj[next.top] = true && item.push(next);
                    return item;
                }, []);
                this.newchildren = [...new Set(newchildren)];

                // if (this.name != this.$route.matched[0].name) {
                //     // this.openeds = ['0']
                //     this.name = this.$route.matched[0].name
                // } else {
                //     this.name = this.$route.matched[0].name
                // }


            },
            toPath(path) {
                this.$router.push({ path: path })
            }
        },
        watch: {
            $route(to, from) {
                this.selsev()
            }
        }
    }
</script>

<style scoped lang='less'>
    .navLeft .el-menu-vertical-demo {
        min-width: 230px;
        border-right: none;
    }

    .active {
        color: #666666;
    }

    .el-menu-item.is-active {
        background-color: #fff7ee !important;
        position: relative;
        color: #f29223;
    }

    .el-menu-item.is-active::before {
        content: ' ';
        width: 6px;
        height: 50px;
        background-color: #f29223;
        position: absolute;
        top: 0;
        left: 0;
    }

    

    .el-menu-item {
        height: 50px !important;
        line-height: 50px !important;
    }

    .navLeft .el-submenu__title {
        height: 50px !important;
        line-height: 50px !important;
    }

    .el-menu-item:hover {
        background-color: #fff7ee !important;
    }

    .el-menu-item{
        padding-left: 70px !important;
    }

    .imgtop {
        vertical-align: top;
        margin-right: 10px;
    }
</style>

<style>
    .navLeft .el-submenu__title:hover {
        background-color: #fff7ee !important;
    }
    .navLeft .menuItem{
        padding-left: 20px!important;
    }
</style>