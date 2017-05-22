<template>
  <div id="app">
    <router-view></router-view>
    <Header></Header>
    <Home></Home>
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
