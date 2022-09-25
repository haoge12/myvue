<template>

</template>

<script>
  export default {
    name: "UserProfile",
    beforeRouteEnter:(to, from, next) =>{
      console.log("进入路由之前");
      next();
    }
  }
</script>

<style scoped>

</style>
