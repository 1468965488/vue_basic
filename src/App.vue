<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/> 
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtils from './util/storageUtils'

  export default {
    mounted(){
      this.$store.dispatch('reqTodos')
    },
    components: {
      Header,
      List,
      Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
<!--

 data(){
      return {
        todos:[
          {title:'吃饭', complete:false},
          {title:'睡觉', complete:false},
          {title:'打豆豆', complete:true},
        ]
      }
    },
-->
