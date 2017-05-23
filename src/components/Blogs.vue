<template lang="html">
<div id="blogs">
  <div class="all-categories">
            <h3>Blog Categories</h3>
            <div class="blog-categories">
            <ul class="blog-categories-all-item">
              <li class="list-group-item">
                <a href="#Android">Android</a>
                <span class="badge">1</span>
              </li>
              <li class="list-group-item">
                <a href="#iOS">iOS</a>
                <span class="badge">1</span>
              </li>
                <li class="list-group-item"><a href="#Think">Think</a>
                  <span class="badge">2</span>
                </li>
              </ul>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name:'blogs',
  data:function () {
    return{
      message:'HelloWorld'
    }
  }
}
</script>

<style lang="css">
#blogs{
  float:right;
  margin-right: 40px;
}
.blog-categories-all-item {
    /*padding-right: 10px;*/
    padding-left: 0px;
}

.list-group-item {
    width: 200px;
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
    text-transform: capitalize;
}

.blog-categories a {
    color: #4183c4;
    text-decoration: none;
}

.badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
    float: right;
}

</style>
