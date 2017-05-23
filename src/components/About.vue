<template lang="html">
  <div id="about">
    <div class="content_about">
        <p>我是不正</p>
        <p>一个从Android过来学点前端的小白</p>
        <p>天道酬勤</p>
        <h2>联系</h2>
        <a href="mailto:yupeibiao@gmail.com">yupeibiao@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'about',
  data:function () {
    return{
      message:'HelloWorld'
    }
  }
}
</script>

<style lang="css">
.content_about {
    overflow: hidden;
    font-family: Arial, "Hiragino Sans GB", 冬青黑, "Microsoft YaHei", 微软雅黑, SimSun, 宋体, Helvetica, Tahoma, "Arial sans-serif";
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    width: 900px;
    padding-left: 20px;
    padding-right: 20px;
    max-height: 1382px;
    position: relative;
    margin: 0 auto;
    text-align: center;
}

</style>
