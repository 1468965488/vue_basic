<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments"  :deleteComment="deleteComment"/>
    </div>

  </div>
</template>

<script>
  //引入组件
  import Add from './components/Add'
  import List from './components/List'
  export default {
    data(){
      return {
        comments:[
          {name:'Bob', content:'vue好用'},
          {name:'yousa', content:'不好用'},
          {name:'hanser', content:'hanser真可爱'},
        ]
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment)
      },
      //删除指定下标的评论
      deleteComment(index){
        // console.log(index, '--------')
        this.comments.splice(index, 1)
      }
    },
  components:{
    Add,
    List
  },
  name: 'App'
}
</script>

<style>

</style>
