<template>
  <div class="blogList-wrap" v-cloak>
    <h3>博客列表</h3>
    <div>
      <el-container style="height: 600px; border: 1px solid #eee">
        <el-main style="width:100%;overflow-x:hidden;overflow-y:auto">
          <el-table :data="tableData">
            <el-table-column label="日期" width="140">
              <template slot-scope="scope">
                <p>{{ scope.row.createtime }}</p>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="120">
              <template slot-scope="scope">
                <p>{{ scope.row.author }}</p>
              </template>
            </el-table-column>
            <el-table-column label="博客名称" class="add-list">
              <template slot-scope="scope">
                <p>{{ scope.row.title }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="control" label="操作" width="120">
              <template slot-scope="scope">
                <div class="but-list">
                  <el-button
                    type="primary"
                    @click="getDetail(scope.row.id)"
                    icon="el-icon-edit"
                    circle
                  ></el-button>
                  <el-button
                    type="danger"
                    @click="deleteBlog(scope.row.id,scope.$index)"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
    <el-button type="primary" style="margin-top:20px;" @click="blogNew">新建博客</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    getDetail(id) {
      this.$router.push({
        path:'/blogNew',
        query:{
          id:id
        }
      });
    },
    deleteBlog(id,index) {
      console.log(id,index);
      let that = this;
      this.$axios
        .post("http://127.0.0.1:3000/api/blog/deleteBlog", {
          params: {
            id:id
          }
        })
        .then(res => {
          console.log(res);
          if(res.data.error=='0'){
            that.tableData.splice(index,1)
          }
         
        });
    },
    blogNew() {
      this.$router.push("/blogNew");
    },
    getList() {
      let that = this;
      this.$axios
        .get("http://127.0.0.1:8000/api/blog/list", {
          params: {
            author:'pepsi'
          }
        })
        .then(res => {
          console.log(res);
          that.tableData = res.data.data;
        });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="scss" scoped>
.blogList-wrap {
  .add-list {
    position: relative;
    .but-list {
      position: absolute;
      right: 10px;
    }
  }
}
</style>