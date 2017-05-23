<template>
  <div id="app">

    <Header></Header>
    <router-view class="container"></router-view>
    <!-- <Home></Home> -->
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  data:function(){
    return {
      message:''
    }
  },
  components:{Header,Home,Footer}

}
</script>

<style>
.container {
    font-family: Arial, "Hiragino Sans GB", 冬青黑, "Microsoft YaHei", 微软雅黑, SimSun, 宋体, Helvetica, Tahoma, "Arial sans-serif";
    font-size: 16px;
    line-height: 1.6;
    color: rgb(51, 51, 51);
    width: 900px;
    padding-left: 20px;
    padding-right: 20px;
    max-height: 1382px;
    position: relative;
    overflow: hidden;
    margin: 0px auto;
}
</style>
