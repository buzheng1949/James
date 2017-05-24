<template lang="html">
  <div id="articledetail">
    <!--内容-->
        <div class="content content_categories">
            <div class="content_article" v-html="article">

            </div>
    </div>
  </div>
</template>

<script>
import Utils from '../js/Utils.js'

export default {
  name:'articledetail',
  data:function () {
    return{
      message:"HelloWorld",
      article:'',
      article_url : "https://api.github.com/repos/buzheng1949/buzheng1949.github.io/issues/"
    }
  },
  methods:{
    getArticleId:function () {
      var reg = new RegExp("(^|&)"+ "article" +"=([^&]*)(&|$)");
      let href = window.location.href.toString()
      console.log(href)
      var r = href.substr(href.length-1,1)
      console.log(r)
      return r
    }
  },
  mounted:function(){
    this.article_url=this.article_url+this.getArticleId()
    var converter = new showdown.Converter();
    this.$http.jsonp(this.article_url).then((response) => {
      var text  = response.data.data.body
      this.article = converter.makeHtml(text);
    })
  }
}
</script>

<style lang="css">
.content_article{
    width: 66.666667%;
    float: left;
    max-height: none;
}



</style>
