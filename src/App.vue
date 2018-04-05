<template>
  <div id="app">
    <div class="routerbox">
      <router-link to="/basic">Basic</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/data">Data</router-link>
      <router-link to="/notice">Notice</router-link>
      <router-link to="/others">Others</router-link>
      <router-link to="/navigation">Navigation</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
        radio: '1'
      };
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
.routerbox{
  margin-bottom:20px;
}
.routerbox a{
  text-decoration:none;
  font-size:16px;
  padding:10px;
}
.box{
  border:2px solid #eee;
  padding:10px;
  margin-bottom:30px;
}
.box h2{
   color: #409eff;
}
.box .title{
  margin-bottom:20px;
  color: #409eff;
}
</style>
