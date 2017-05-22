<template lang="html">
  <div v-bind:class="{header:true}">
    <nav v-bind:class="{navgationbar:true}">
      <ul v-bind:class="{menu:true}">
        <li v-for="title in titles" v-bind:class="{title:true,logo:title.isLogo}" @mouseover="toggleShow()" >
          <a href="#" v-bind:class="{href:true}">
            <span v-bind:class="{focus:title.isLogo}">{{title.label}}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data :function(){
    return {
      titles :[
        {
          label:'关于',
          isLogo:false
        }
        ,
        {
          label:'分类',
          isLogo:false
        }
        ,
        {
          label:'首页',
          isLogo:false
        }
        ,
        {
          label:'我的博客',
          isLogo:true
        }
      ]
    }
  },
  methods:{
    toggleShow:function () {
      $("nav ul li").hover(function () {
             $(this).children("a").css("color", "#fff");
         }, function () {
             $(this).children("a").css("color", "rgba(255, 255, 255, .5)");
         });
    }
  },
  mounted:function(){
    // this.hovernav()
  }
}
</script>

<style lang="css">
.href{
  font-family: Arial, "Hiragino Sans GB", 冬青黑, "Microsoft YaHei", 微软雅黑, SimSun, 宋体, Helvetica, Tahoma, "Arial sans-serif";
  display: block;
  font-size: 1rem;
  line-height: inherit;
  color: rgba(255, 255, 255, 0.5);
  word-wrap: break-word;
  padding: 0px 20px;
  text-decoration: none;
}
.header{
height: 93px;
background: #4183c4;
margin-top: -20px;
margin-left: -10px;
margin-right: -20px;
}

.focus{
  color: white;
}

.navgationbar{
width: 1000px;
padding: 25px 0 20px;
position: relative;
margin: 0 auto;
}

.menu{
list-style: none;
margin-right: 120px;
}

.title{
  float:right;
  text-align: center;

}

.logo{
  float: left;
}

.logo a{
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
}
</style>
