<template lang="html">
   <div class="container">
     <Article></Article>
     <Search></Search>
   </div>
</template>

<script>
import Article from './Article.vue'
import Search from './Search.vue'
export default {
  name:"home",
  data:function(){
    return{
      message:'this is the container'
    }
  },
  components:{Article,Search}
}
</script>

<style lang="css">

</style>
