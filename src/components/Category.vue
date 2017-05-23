<template lang="html">
<div id="category">
  <CateList></CateList>
  <Search></Search>
  <Blogs></Blogs>
</div>
</template>

<script>
import Search from './Search.vue'
import CateList from './CateList.vue'
import Blogs from './Blogs.vue'
export default {
  name:'category',
  data:function () {
    return{

    }
  },
  components:{Search,CateList,Blogs}
}
</script>

<style lang="css">
</style>
