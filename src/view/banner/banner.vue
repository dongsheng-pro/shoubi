<style>
</style>
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
      <Button style="margin: 10px 10px;" type="success" @click="addModel">添加</Button>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
    <!-- 修改弹出框 -->
    <Modal
      v-model="formModal"
      title="修改"
      @on-ok="ok"
      width="50%"
      @on-cancel="cancel"
      ok-text="提交修改"
    >
      <Form ref="formValidata" :model="formValidata" :label-width="100">
        <Row>
          <i-col span="8">
            <FormItem label="名称">
              <Input v-model="formValidata.Title"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="描述">
              <Input v-model="formValidata.Des"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="排序">
              <Input v-model="formValidata.Sort"/>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="8">
            <FormItem label="是否可用">
              <Input v-model="formValidata.IsOn"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="图片地址">
              <Input v-model="formValidata.ImgUrl"/>
            </FormItem>
          </i-col>
          <i-col span="8">
            <FormItem label="着落页地址">
              <Input v-model="formValidata.DetailUrl"/>
            </FormItem>
          </i-col>
        </Row>
      </Form>
    </Modal>
    <!-- 修改弹出框 end-->
  </div>
</template>

<script>
import Tables from "_c/tables";
import {
  GetSBanner,
  DeleteSBanner,
  GetSBannerID,
  PutSBanner,
  PostSBanner
} from "@/api/banner";
export default {
  name: "banner",
  components: {
    Tables
  },
  data() {
    return {
      formValidata: {},
      formModal: false,
      pageSize: 10,
      pageNum: 1,
      total: 0,
      columns: [
        { title: "ID", key: "Id", sortable: true},
        { title: "名称", key: "Title" },
        { title: "描述", key: "Des" },
        { title: "排序", key: "Sort" },
        { title: "是否可用", key: "IsOn"},
        { title: "图片地址", key: "ImgUrl"},
        { title: "着落页地址", key: "DetailUrl"},
        { title: "添加时间", key: "AddDate"},
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          fixed: "right",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.setdata(params);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleDelete(params.index, params.row.Id);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      tableData: []
    };
  },
  methods: {
    //更新表格
    updataModel() {
      GetSBanner(this.pageSize, this.pageNum).then(res => {
        this.tableData = res.data.Data.List;
        this.total = res.data.Data.Count;
      });
    },
    handleDelete(index, Id) {
      DeleteSBanner(Id.toString()).then(res => {
        if (res.data.Status == 1) {
          this.$Message.success("删除成功！");
        } else {
          this.$Message.error("删除失败！");
        }
      });
      this.tableData.splice(index, 1);
    },
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}.csv`
      });
    },
    //编辑
    setdata(params) {
      GetSBannerID(params.row.Id.toString()).then(res => {
        if (res.data.Status == 1) {
          this.formValidata = res.data.Data;
        } else {
          this.$Message.error("获取信息失败！");
        }
      });
      this.formModal = true;
    },
    //弹出框确认
    ok() {
      if (this.formValidata.Id != null && this.formValidata.Id != "") {
        PutSBanner(this.formValidata, this.formValidata.Id).then(res => {
          if (res.data.Status == 1) {
            this.$Message.success("更新信息成功！");
          } else {
            this.$Message.error("更新信息失败！");
          }
          this.updataModel();
        });
      } else {
        PostSBanner(this.formValidata).then(res => {
          if (res.data.Status == 1) {
            this.$Message.success("添加信息成功！");
          } else {
            this.$Message.error("添加信息失败！");
          }
          this.updataModel();
        });
      }
      this.formModal = false;
    },
    //弹出框取消
    cancel() {
      this.$Message.info("编辑取消！");
    },
    //添加编辑
    addModel() {
      this.formValidata = {};
      this.formModal = true;
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
    this.updataModel();
  }
};
</script>

<style>
</style>