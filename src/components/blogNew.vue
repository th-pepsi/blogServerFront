<template>
  <div class="blogNew-wrap">
    <h3>新建博客</h3>
    <div>
      博客名称：
      <el-input v-model="blogname" placeholder="请输入博客名称" class="but"></el-input>
    </div>
    <div style="margin-top:20px;overflow:hidden;">
      博客内容：
      <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="blogctx" class="but"></el-input>
    </div>
    <el-button type="primary" style="margin-top:20px;" @click="iamsure">确定</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      blogname: "",
      blogctx: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    iamsure() {
      let that = this;
      if (this.$route.query.id) {
        //修改博客
         this.$axios
          .post("http://127.0.0.1:3000/modifyBlog", {
            params: {
              id:that.$route.query.id,
              title: that.blogname,
              content: that.blogctx
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.error == "0") {
              console.log("修改成功");
              that.$router.push("/blogList");
            }
          });
      } else {
        //新建博客
        this.$axios
          .post("http://127.0.0.1:3000/newBlog", {
            params: {
              author: "pepsi",
              title: that.blogname,
              content: that.blogctx
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.error == "0") {
              console.log("新建成功");
              that.$router.push("/blogList");
            }
          });
      }
    },
    getDetail(id) {
      let that = this;
      this.$axios
        .get("http://127.0.0.1:3000/detail", {
          params: {
            id: id
          }
        })
        .then(res => {
          console.log(res);
          that.blogname = res.data.data[0].title;
          that.blogctx = res.data.data[0].content;
        });
    }
  },
  mounted() {
    console.log(this.$route.query.id);
    if (this.$route.query.id) {
      this.getDetail(this.$route.query.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.blogNew-wrap {
  .but {
    width: 350px;
  }
}
</style>