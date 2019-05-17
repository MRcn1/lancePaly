<template>
  <!-- Lan结尾的有公共样式，在reset.css -->
  <div class="tradingFlow">
    <p class="titleLan">交易流水</p>
    <div class="searchLan">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="记账时间" label-width="120px">
          <el-input v-model="formInline.time" :placeholder="nowTime"></el-input>
        </el-form-item>

        <el-form-item label="交易状态" label-width="120px">
          <el-select v-model="formInline.tradingStatus" placeholder="当前交易状态">
            <el-option label="交易成功" value="0"></el-option>
            <el-option label="处理中" value="1"></el-option>
            <el-option label="交易失败" value="2"></el-option>
            <el-option label="失败" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商户订单号" label-width="120px">
          <el-input v-model="formInline.userId" placeholder="商户订单号"></el-input>
        </el-form-item>

        <el-form-item label="商户姓名" label-width="120px">
          <el-input v-model="formInline.userName" placeholder="商户姓名"></el-input>
        </el-form-item>

        <el-form-item label="订单类型" label-width="120px">
          <el-select v-model="formInline.orderType" placeholder="订单类型">
            <el-option label="商业代付" value="0"></el-option>
            <el-option label="结算代付" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商户名称" label-width="120px">
          <el-input v-model="formInline.merchantsName" :placeholder="nowTime"></el-input>
        </el-form-item>

        <el-form-item style="margin-left:50px;">
          <el-button type="warning" @click="onSubmit">查询</el-button>
          <el-button @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="summaryLan">
      <div class="data" v-for="(item, index) in showdata" :key="index">
        <p>{{item.number}}</p>
        <p>{{item.type}}</p>
      </div>
    </div>
    <div class="tableLan">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{background:'#f4f9ff',color:'#666666',fontWeight:'normal'}"
      >
        <el-table-column label="日期" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="姓名" align="center"></el-table-column>
        <el-table-column label="地址" align="center"></el-table-column>
      </el-table>
    </div>
    <div class="paginationLan">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[20, 30, 40]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        userId: "",
        time: "",
        userName: "",
        orderType: "",
        merchantsName: "",
        tradingStatus: ""
      },
      tableData: [],
      currentPage2: 1,
      pageSize: 20,
      total: 200,
      nowTime: "",
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
          number: "￥7,000.00",
          type: "交易总额"
        },
        {
          number: "￥7,0.00",
          type: "手续费合计"
        }
      ]
    };
  },
  components: {},
  created() {
    const vm = this;
    vm.getNowTime();
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
    onSubmit() {},
    getNowTime() {
      const vm = this;
      let time = new Date();
      let year,
        month,
        day = 0;
      year = time.getFullYear();
      month = time.getMonth() + 1;
      day = time.getDate();

      vm.nowTime = year + "/" + month + "/" + day;
    }
  }
};
</script>

<style scoped lang='less'>
.summaryLan {
  display: flex;
  .data {
    width: 24%;
    border-right: 1px solid #cccccc;
    :first-child {
      font-size: 40px;
      color: #ff6600;
      font-weight: bold;
    }
    :last-child {
      color: #999999;
      font-weight: bold;
    }
    p {
      text-align: center;
    }
  }
}
</style>