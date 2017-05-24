<template lang="html">
  <div id="article">
    <div id="content_article">
      <ol id="article_list">
          <li id="article-list-item" v-for="article in articles">
            <h3 id="article-list-item-name">
              <a v-bind:href="article.href">{{article.name}}</a>
            </h3>
            <p id="article-list-item-descripition">{{article.des}}</p>
            <p id="article-list-item-other-msg">
              <span id="article-list-item-other-msg-detail">{{article.time}}</span>
              <span id="article-list-item-other-msg-detail">{{article.type}}</span>
            </p>
          </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Utils from '../js/Utils.js'
export default {
  name:'article',
  data:function () {
    return{
      message:'article',
      url:'https://api.github.com/repos/buzheng1949/buzheng1949.github.io/issues',
      articleurl:"src/article.html?issueid=",
      articles:[]
    }
  },
  created:function(){
    console.log('created')
    this.setArticleMessage()
  },
  methods:{
    setArticleMessage:function () {
      this.$http.jsonp(this.url).then((response) => {
        for (var i = 0; i < Utils.getJsonLength(response.data.data); i++) {
          var issue = response.data.data[i]
          var id = issue.html_url.toString().charAt(issue.html_url.toString().length-1);
          var href = issue.articleurl+id
          var name = issue.title
          var des = issue.body.toString().substring(0, issue.body.toString().indexOf("\r\n"))
          var time = issue.created_at.toString().substring(0, 10);
          var type = issue.milestone.title;
          this.articles.push({
            href:href,
            name:name,
            des:des,
            time:time,
            type:type
          })
        }
      })
    },
    getJsonLength:function(json){
      var jsonLength = 0;
      for (var item in json) {
          jsonLength++;
      }
      return jsonLength;
    }
  }
}
</script>

<style lang="css">
#content_article{
width: 66.666667%;
float: left;
}

#article_list{
position: relative;
padding-left: 0;
list-style: none;
}
#article_list li{
position: relative;
padding-top: 30px;
padding-bottom: 30px;
border-bottom: 1px solid #eee;
}

#article-list-item-name{
  margin: 0 0 8px;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
}

#article-list-item-name a {
    text-decoration: none;
    color: #4183C4;
}

#article-list-item-descripition{
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 14px;
    color: #666;
}

#article-list-item-other-msg{
  font: normal normal normal 13px/1 octicons;
display: inline-block;
text-decoration: none;
text-rendering: auto;
color: #999;
}

#article-list-item-other-msg-detail{
  font: normal normal normal 13px/1 octicons;
display: inline-block;
margin-right: 20px;
color: #999;
}
</style>
