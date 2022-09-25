<template>
  <div id="app">
    <!--    <router-link to="/main">首页</router-link>-->
    <!--    <router-link to="/content">内容页</router-link>-->
    <!--    <router-link to="/test">测试页</router-link>-->

    <!--    <router-link to="/login">登录页</router-link>-->
    <router-view/>
  </div>
</template>

<script>
  import Content from "./pages/Content";
  import Main from "./pages/Main";
  export default {
    name: 'App',
    // comments: Main
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
