<template>
<div>
  <p>click {{$store.state.count}} times, count is {{type}}</p>
  <button @click="increament">+</button>
  <button @click="decreament">-</button>
  <button @click="increaOdd">incaeament if odd</button>
  <button @click="increaAsync">increament async</button>
</div>
</template>

<script>
  export default {
    computed:{
      type(){
        return this.$store.getters.type
      }
    },
    methods:{
      increament(){
        //通知vuex去增加
        this.$store.dispatch('increament')   //触发store中的action调用
      },
      increaOdd(){
        this.$store.dispatch('increaOdd')
      },
      decreament(){
        this.$store.dispatch('decreament')
      },
      increaAsync(){
        this.$store.dispatch('increaAsync')
      }
    }
  }
</script>

<style>

</style>