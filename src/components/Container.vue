<template lang="html">
   <div id="container">
     <Article></Article>
     <Search></Search>
   </div>
</template>

<script>
import Article from './Article.vue'
import Search from './Search.vue'
export default {
  name:"container",
  data:function(){
    return{
      message:'this is the container'
    }
  },
  components:{Article,Search}
}
</script>

<style lang="css">
#container {
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
