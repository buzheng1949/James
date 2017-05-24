<template lang="html">
  <div id="footer">
      <ul id="last">
          <li id="last-item"><a class="myshow" href='#'>@2017 yupeibiao</a></li>
          <li id="last-item"><a href=''>首页</a></li>
          <li id="last-item"><a href="/#categories">分类</a></li>
          <li id="last-item"><a href="/#about">关于</a></li>
          <li id="last-item"><a href="javascript:window.scrollTo(0,0)">TOP</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'footer',
  data:function () {
    return{

    }
  }
}
</script>

<style lang="css">
#footer{
  text-align: center;
}
#footer li {
padding: 10px;
margin: 0;
list-style: none;
text-align: center;
}

#last-item {
    display: inline-block;
    line-height: 16px;
    padding: 0;
}

#footer ul li a{
  font-size: 12px;
color: #4183c4;
text-decoration: none;
}
</style>
