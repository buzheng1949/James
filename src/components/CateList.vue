<template lang="html">
  <div class="catelist">
      <div class="content_article" v-for="articleType in articleTypes">
        <h3>{{articleType.type}}</h3>
        <ol class="categories-list">
          <li class="categories-list-item" v-for="article in articles" v-if='article.type == articleType.type' >
            <span class="categories-list-item-time">2017-04-01</span>
            <a class="categories-list-item-name" href="article.html?issueid=5">{{article.title}}</a>
          </li>
        </ol>
      </div>
  </div>
</template>

<script>
export default {
  name:'catelist',
  data:function () {
    return{
      message:'helloworld',
      seen:true,
      categories_url : "https://api.github.com/repos/buzheng1949/buzheng1949.github.io/milestones",
      issues_url : "https://api.github.com/repos/buzheng1949/buzheng1949.github.io/issues",
      articleTypes:[
        // {
        //   type:'Android'
        // }
      ],
      articles:[
        // {
        //   type:'Android',
        //   time:'2017-04-30',
        //   title:'图片异步加载方案1',
        //   href:'#'
        // },
        // {
        //   type:'Android',
        //   time:'2017-04-30',
        //   title:'图片异步加载方案1',
        //   href:'#'
        // },
        // {
        //   type:'iOS',
        //   time:'2017-04-30',
        //   title:'iOS培养计划',
        //   href:'#'
        // }
      ]
    }
  },
  created:function () {
    console.log('created by cate list')
    this.$http.jsonp(this.categories_url).then((response) => {
      for (var i = 0; i < this.getJsonLength(response.data.data); i++) {
          console.log(response.data.data[i].title)
          this.articleTypes.push({
            type:response.data.data[i].title
          })
      }
    })
    this.$http.jsonp(this.issues_url).then((response) => {
      for (var i = 0; i < this.getJsonLength(response.data.data); i++) {
        var issue = response.data.data[i]
        var id = issue.html_url.toString().charAt(issue.html_url.toString().length-1);
        var title = issue.title
        var des = issue.body.toString().substring(0, issue.body.toString().indexOf("\r\n"))
        var time = issue.created_at.toString().substring(0, 10);
        var type = issue.milestone.title;
        console.log(name,des,time,type)
        this.articles.push({
          href:'#',
          title:title,
          time:time,
          type:type
        })
      }
    })
  },
  methods:{
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
.catelist{
  max-height: none;
  width: 66.666667%;
  float: left;
}

.categories-list {
    line-height: 2;
    color: #555;
    list-style: disc;
}

.categories-list-item {
    border-bottom: 1px dashed #ccc;
    margin: 10px;
    padding: 0;
}

.categories-list-item-time {
    font-size: 12px;
    font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
    line-height: 2;
    color: #555;
    background: #fff;
}

.categories-list-item a {
    text-decoration: none;
    background-color: transparent;
}

.categories-list-item-name {
    font-size: 16px;
    font-weight: normal;
    font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
    line-height: inherit;
    color: #666;
    margin-left: 10px;
}
</style>
