<template>
  <!-- Lan结尾的有公共样式，在reset.css -->
  <div class="tradingFlow">
    <p class="titleLan">余额查询</p>
    <div class="searchLan">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="商户名称" label-width="120px">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left:50px;">
          <el-button type="warning" @click="onSubmit">查询</el-button>
          <el-button @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableLan">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{background:'#f4f9ff',color:'#666666',fontWeight:'normal'}"
      >
        <el-table-column label="商户名称" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="可代付余额" align="center"></el-table-column>
        <el-table-column label="冻结金额" align="center"></el-table-column>
        <el-table-column label="不可代付金额" align="center"></el-table-column>
        <el-table-column label="可代付余额A" align="center"></el-table-column>
        <el-table-column label="可代付余额A" align="center"></el-table-column>
        <el-table-column label="支付通道" align="center"></el-table-column>
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
      total: 200
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
</style>