<template>
  <div>
  <el-table
    :data="messageList"
    style="width: 100%">
    <el-table-column
      prop="fileName"
      label="文件名1"
      width="180">
    </el-table-column>
    <el-table-column
      prop="url"
      label="修改时间1"
      width="180">
    </el-table-column>
    <!--    <el-table-column-->
    <!--      prop="address"-->
    <!--      label="地址">-->
    <!--    </el-table-column>-->
  </el-table>
  </div>
</template>

<script>
  import axios from "_axios@0.27.2@axios";
  import store from "../store";

  export default {
    data() {
      return {
        messageList:[{
          // fileName: '2016-05-02',
          // url: '王小虎',},
          fileName: null,
          id: null,
          ownerId: null,
          parentId: null,
          url: null,
          pathName: null,}
        ]
      }
    },
    methods: {
      // 给messageList赋值
      // 主页面默认展示parentId为0的数据
      getContent(id){
        let messageList = this.messageList;
        axios.get(store.state.baseURL + 'list/listAll',{
          params:{
            path: '0/' + id
          },
          headers: {token: store.state.token}
        }).then(res => messageList = res.data.data);
        // this.reload()
        // this.newPages()
      },
      newPages(fileName){
        // this.getContent()
        console.log("fileName", fileName)
        // this.$router.push('/main/content/' + fileName)
        this.$router.push({path: '/main/content?path='+fileName, query:{path: fileName}})
        console.log("fileName:", fileName)
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
    // activated() {
    //   console.log('我这个页面显示就会执行');
    // },
    mounted() {
      this.getContent()
    }
    // watch: {
    //   // 如果路由有变化，会再次执行该方法
    //   '$route':'routeChange'
    // },
    // created() { //生命周期函数
    //   // 在Vue实例创建时就给messageList赋值
    //   this.getContent()
    //   // console.log("messageList",this.messageList)
    // },
  };
</script>
