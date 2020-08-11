<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addTodo="addTodo"/>     绑定自定义事件监听 需要调用时，用$emit('addTodo', todo)调用 -->
       <Header ref="handle"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :deleteCompleteTodos="deleteCompleteTodos" :todos="todos"
      :selectAllTodos="selectAllTodos"/> 
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  import storageUtils from './util/storageUtils'

  export default {
   data () {
      return {
        todos: storageUtils.readTodos()  // 读取localStorage保存的数据
        // todos: storageUtils.readTodos()
      }
    },
    watch: {
      todos: {
        deep: true, 
        handler: storageUtils.saveTodos
      }
    },
    mounted(){
      this.$refs.handle.$on('addTodo', this.addTodo)
      Pub
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 删除所有已完成的
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      // 全选/全不选
      selectAllTodos (isSelectAll) {
        this.todos.forEach(todo => {
          todo.complete = isSelectAll
        })
      }
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
