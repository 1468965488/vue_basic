<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import Item from "./Item";
  import storageutil from '../util/storageUtils'
  export default {
    components:{
      Item
    },
    computed:{
      ...mapState(['todos'])
    },

    watch:{
      todos:{
        deep:true,
        handler:storageutil.saveTodos
      }
    }
  }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
