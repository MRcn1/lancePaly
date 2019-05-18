<template>
  <!-- Lan结尾的有公共样式，在reset.css -->
  <div class="tradingFlow">
    <p class="titleLan">交易流水</p>
    <div class="searchLan">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="交易日期" label-width="120px" v-model="value2">
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="交易状态" label-width="100px">
          <el-select v-model="formInline.region" placeholder="交易状态">
            <el-option label="交易成功" value="0"></el-option>
            <el-option label="支付中" value="1"></el-option>
            <el-option label="交易失败" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商户订单号" label-width="100px">
          <el-input v-model="formInline.user" placeholder></el-input>
        </el-form-item>
        <el-form-item style="margin-left:20px;">
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
        <el-table-column label="平台流水号" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="商户订单号" align="center"></el-table-column>
        <el-table-column label="支付方式" align="center"></el-table-column>
        <el-table-column label="交易状态" align="center"></el-table-column>
        <el-table-column label="交易金额" align="center"></el-table-column>
        <el-table-column label="手续费" align="center"></el-table-column>
        <el-table-column label="实际到账" align="center"></el-table-column>
        <el-table-column label="交易时间" align="center"></el-table-column>
        <el-table-column label="通知状态" align="center"></el-table-column>
        <el-table-column label="备注" align="center"></el-table-column>
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
        user: "",
        region: ""
      },
      tableData: [],
      currentPage2: 1,
      pageSize: 20,
      total: 200,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value2: "",
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
      ]
    };
  },
  components: {},
  created() {},
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