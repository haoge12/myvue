<template>
  <div>

    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-button size="small" type="primary">点击上传</el-button>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
          <span>待写的用户名</span>
        </el-header>
        <el-main>
          <table id="table">
            <thead>
            <!--          <button  @click = "getContent">按钮</button>-->
            <tr>
              <th>文件名</th>
              <th>修改时间</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="m in messageList">
              <td>
                <router-link :to="{
                  path:'/content',
                  query:{
                    path: m.fileName
                  }
                }" @click="newPages(m.fileName)">
                  {{m.fileName}}
                </router-link>
              </td>
              <td>
                {{m.url}}
              </td>
              <td>
                下载
              </td>
              <router-view></router-view>
            </tr>
            </tbody>
          </table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<!--<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.min.js"></script>-->
<script>
  import axios from "axios";
  import store from "../store";
  export default {
    // inject: ['reload'],
    // mounted(){
    //   // $route能得到当前组件所相关的路由配置信息，包括路由所传递的参数
    //   console.log("main:", this.$route)
    // },
    data() {
      return {
        messageList:[{
          fileName: null,
          id: null,
          ownerId: null,
          parentId: null,
          url: null,
          filePath: null
        }
        ]
      }
    },
    methods: {
      // 给messageList赋值
      // 主页面默认展示parentId为0的数据
      getContent(){
        axios.get(store.state.baseURL + 'list/listAll',{
          params:{
            path: null
          },
          headers: {token: store.state.token}
        }).then(res => this.messageList = res.data.data);
        // this.$router.go(0)
        // this.reload()
        // this.newPages()
      },
      newPages(fileName){
        // this.getContent()
        console.log("fileName", fileName)
        // this.$router.push('/main/content/' + fileName)
        // this.$router.push({path: '/main/content?path='+fileName, query:{path: fileName}})
        // this.$router.push({path: '/content?path='+fileName, query:{path: fileName}})
        this.$router.push('/content?path=' + fileName)
        console.log("fileName:", fileName)
      },
      upload(){

      },
      // routeChange(fileName){
      //   this.newPages(fileName)
      // },
      // gerContent(){
      //   axios.get('api/list/listAll/0', {
      //     params:{
      //     },
      //     headers:{token:"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMjg0MWViNjhmMDY0NzI0YjhlZjk0NzA1MmYwNzRmOCIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2Mzg2MjA4OSwiZXhwIjoxNjYzOTQ4NDg5fQ.9mHBjYbx9Bh0fcxYfLMpvy5PzwNfxAXNJb2bosavh24"}
      //   }).then(res => {
      //     this.messageList=res.data.data
      //     // console.log(this.messageList)
      //   }
      //   );
      // },
      // getContentDetail:function(){
      //   getContent(0).then((response)=>{
      //     this.messageList = response.data
      //     console.log("response", response.data)
      //     // const markdownIt = mavonEditor.getMarkdownIt()
      //     // // 把返回的数据写入到this.detailObj.content中
      //     // this.detailObj.content = markdownIt.render(response.content);
      //     // console.log("response.content", response)
      //   })
      // },
      //
      // routeChange:function(){
      //   var that = this;
      //   this.path = this.$route.query.path;//获取传参的classId
      //   this.getContentDetail();
      //   // this.showSearchShowList(true);
      // },
      // 递归寻找父message
      findParent(message, messageList1, parentId){
        if(parentId === '0'){
          return message.fileName;
        }
        else {
          for(let i = 0; i < messageList1.length; i++){
            if(parentId === messageList1[i].id){
              return this.findParent(messageList1[i], messageList1, messageList1[i].parentId) +message.fileName;
            }
          }
        }
      },
      findParentFileNameByChildrenId(message, messageList1){
        // console.log(this.findParent(message, messageList1, message.parentId))
        // this.$router.push('/content/' + this.findParent(message, messageList1, message.parentId));
        this.$router.push({name:'/content/path'});
      },
    },
    // watch: {
    //   // 如果路由有变化，会再次执行该方法
    //   '$route':'routeChange'
    // },
    mounted() { //生命周期函数
      // 在Vue实例创建时就给messageList赋值
      this.getContent()
      // console.log("messageList",this.messageList)
    },
  };
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
