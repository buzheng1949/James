<template lang="html">
  <div id="search">
        <h3>Search</h3>
        <!--搜索以及结果显示-->
        <div id="site_search">
            <input id="search_box" placeholder="Search" v-model="message">
            <button v-on:click="greet">{{search}}</button>
        </div>
        <!--动态生成结果-->
        <div id="serach_result">
            <ul id="search_result_content">
              <li v-for="article in result">
                <a href="#">{{article.title}}</a>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Utils from '../js/Utils.js'
export default {
  name:'search',
  data:function () {
    return{
      message:'',
      url:'https://api.github.com/repos/buzheng1949/buzheng1949.github.io/issues',
      result:[],
      search:'搜索',
      articles:[]
    }
  },
  created:function () {
    console.log('created again')
    this.$http.jsonp(this.url).then((response) => {
      for (var i = 0; i < Utils.getJsonLength(response.data.data); i++) {
        var issue = response.data.data[i]
        var id = issue.html_url.toString().charAt(issue.html_url.toString().length-1);
        var href = issue.articleurl+id
        var title = issue.title
        var href = issue.html_url
        this.articles.push({
          title:title,
          href:href
        })
      }
    })
  },
  methods:{

    greet:function () {
      this.result = []
      if(this.message ===''){
        return;
      }
      for(let article of this.articles){
        if (article.title.search(this.message) != -1) {
          var id = article.href.toString().charAt(article.href.toString().length-1);
          var href = article.href+id
          var title = article.title
          this.result.push({
            href:'#',
            title:title
          })
        }
      }
  }
}
}
</script>

<style lang="css">
#search{
  float:right;
}

#search h3{
  margin-top: 40px;
}

#site_search {
    float: left;
    /*padding-right: 40px*/
}

#search_box {
    width: 210px;
    height: 26px;
    margin-bottom: 10px;
}

button {
    color: #333;
    background-color: #eee;
    border: 1px solid #d5d5d5;
    boder-radius: 3px;
    padding: 6px 12px;
}

#search_result_content {
    margin-top: 10px;
    list-style: none;
    padding: 5px;
}

#search_result_content a{
  font-size: 14px;
  color: #4183c4;
  text-decoration: none;
}

</style>
