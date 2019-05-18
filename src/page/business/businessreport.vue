<template>
  <!-- Lan结尾的有公共样式，在reset.css -->
  <div class="tradingFlow" :style="{height: lanHeight}">
    <p class="titleLan">余额查询</p>
    <div class="searchLan">
      <div class="datablock">
        <img src="http://imageqiniuyun.lvxiaoluo.com/u35.png">
        <div class="data">
          <p>可代付余额</p>
          <p>￥1000000.00</p>
        </div>
      </div>

      <div class="datablock">
        <img src="http://imageqiniuyun.lvxiaoluo.com/u36.png">
        <div class="data">
          <p>不可代付余额</p>
          <p>￥1000000.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage2: 2,
      pageSize: 20,
      total: 200,
      showdata: [
        {
          number: "2",
          type: "商户数量"
        },
        {
          number: "6",
          type: "总笔数"
        },
        {
          number: "￥7,000.01",
          type: "交易总额"
        },
        {
          number: "￥7,0.00",
          type: "手续费合计"
        }
      ],
      lanHeight: ""
    };
  },
  components: {},
  created() {
    const vm = this;
    vm.lanHeight = window.innerHeight - 85 + "px";
  },
  methods: {
    handleSizeChange(val) {
      //更改每页条数
      console.log(val);
    },
    handleCurrentChange(val) {
      //页数
      console.log(val);
    },
    onSubmit() {}
  }
};
</script>

<style scoped lang='less'>
.searchLan {
  display: flex;

  .datablock {
    width: 35%;
    border: 1px solid #f2f2f2;
    margin: 2% 10%;
    display: flex;
    align-items: center;
    padding: 3% 0%;
    box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.3);
    img {
      margin-left: 20%;
      width: 48px;
      height: 45px;
    }
    .data {
      margin: 0% 1%;
      width: 30%;
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>