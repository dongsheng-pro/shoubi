<template>
  <div>
    <Card>
      <tables        
        ref="tables"
        editable
        searchable
        search-place="top"
        v-model="tableData"
        :columns="columns"
        :insidePageSize="pageSize"
        :insidePageNum="pageNum"
        :total="total"
        @page-Change="PageChange"
        @handle-PageSize="HandlePageSize"
        @on-delete="handleDelete"
      />
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from "_c/tables";
import { getSystemTableData } from "@/api/data";
export default {
  name: "system-list",
  components: {
    Tables
  },
  data() {
    return {
      columns: [
        { title: "ID", key: "LogId", sortable: true },
        { title: "表名", key: "Type" },
        { title: "信息", key: "Msg" },
        { title: "添加时间", key: "AddTime" }
      ],
      tableData: [],
      pageSize: 10,
      pageNum: 1,
      total: 0
    };
  },
  methods: {
    handleDelete(params) {
      console.log(params);
    },
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    },
    PageChange(PageNum) {
      this.pageNum = PageNum;
      this.updataModel();
    },
    HandlePageSize(PageSize) {
      this.pageSize = PageSize;
      this.updataModel();
    }
  },
  mounted() {
    getSystemTableData(this.pageSize, this.pageNum).then(res => {
      this.tableData = res.data.Data.List;
      this.total = res.data.Data.Count;
    });
  }
};
</script>

<style>
</style>
