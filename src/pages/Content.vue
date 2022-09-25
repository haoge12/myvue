<template>
  <div>
    <h1>内容页</h1>

    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <!--            // TODO-->
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!--        TODO-->
          <span>待写的用户名</span>
        </el-header>
        <el-main>
          <table id="table">
            <thead>
            <tr>
              <th>文件名</th>
              <th>修改时间</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="m in messageList">
                <td>
<!--                  <router-link :to="newPages(m.fileName)">{{ m.fileName }} </router-link>-->
                  <el-link :underline="false" @click = "newPages(m.fileName)">{{ m.fileName }} </el-link>
<!--                  <router-link :to="{-->
<!--                    path: '/content/' + m.fileName,-->
<!--                    query:{-->
<!--                      path: m.fileName-->
<!--                    }-->
<!--                  }" @click="newPages(m.fileName)">-->
<!--                     {{m.fileName}}-->
<!--                  </router-link>-->

  <!--                </router-link>-->
                  <!--              <el-link :underline="false" @click = "findParentFileNameByChildrenId(m, messageList)">{{ m.fileName }}</el-link>-->
                  <!--              <router-link :to="{name:'content', params:{path: m.fileName} }" > {{m.fileName}}</router-link>-->
                  <!--              <router-link to="{name: '/content', params:{id: 1}}">{{m.fileName}}</router-link>-->
                </td>
                <td>
                  {{m.url}}
                </td>
                <td>
                  上传
                </td>
                <td>
                  下载
                </td>
              </tr>

            </tbody>
          </table>
          <router-view :key="$route.fullPath"></router-view>
<!--          <router-view></router-view>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
  import axios from "axios";
  import store from '../store'
  export default {
    name: 'Content',
    props: ['path'],
    // inject: ["reload"],
    data() {
      return {
        messageList: [{
          fileName: null,
          id: null,
          ownerId: null,
          parentId: null,
          url: null
        }
        ]
      }
    },
    methods: {

      getContent() {
        axios.get(store.state.baseURL + 'list/listAll', {
          params: {
            // TODO 接收路由上一级传过来的fileName
            path: this.$route.query.path
          },
          headers: {token: store.state.token}
        })
          // .then(res => console.log("res", res.data.data))
        .then(res => this.messageList = res.data.data)
        // .then(res => console.log(res));
        // this.reload()
        // console.log("this.$route.query.path",this.$route.query.path)
      },
      newPages(fileName){
        console.log(this.$route.query.path)
        console.log("full", this.$route.fullPath)
        this.$router.push('/content?path=' + this.$route.query.path + '/' +fileName)
        // 刷新当前页面
        this.$router.go(0)
        // return '/content?path=' + this.$route.query.path + '/' +fileName
        // return
        // console.log("fileName", fileName)
        // // this.$router.push('/main/content/' + fileName)
        // console.log("this.$route.query.path", this.$route.query.path)
        // // this.$router.push({path: '/main/content?path='+fileName, query:{path: fileName}})
        // // this.$router.push({path: '/content?path='+fileName, query:{path: fileName}})
        // this.$router.push('/content?path=' + this.$route.query.path + '/' +fileName)
        // // console.log("fileName:", fileName)
      },
    },
    mounted() {
      this.getContent()
      // console.log(location.href)
      // if (location.href.indexOf("#reloaded") === -1) {
      //   location.href = location.href + "#reloaded";
      //   this.reload()
      // }
      // const times = store.state.refresh - 1;
      // if (times >= 0){
      //   location.reload()
      // }


    }
  }
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
  /*.box1{*/
  /*  width: 300px;*/
  /*  height: 300px;*/
  /*  border-style: solid;*/
  /*  border-width: 10px;*/
  /*  border-color: palegoldenrod;*/
  /*}*/
</style>
