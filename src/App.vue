<template>
  <div id="app">

    <Header></Header>
    <router-view></router-view>
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

</style>
