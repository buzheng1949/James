<template>
  <div id="app">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'

export default {
  data:function(){
    return {
      message:''
    }
  },
  components:{Header,Container,Footer}

}
</script>

<style>

</style>
