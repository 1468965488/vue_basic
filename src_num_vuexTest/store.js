import Vue from 'vue'
import Vuex from'vuex'

Vue.use(Vuex)
 //状态对象
const state = { //初始状态
    count:0
}
//多个更新state函数的对象
const mutations = {
    //增加的mutation
    INCREAMENT(state){
        state.count++
    },
    //减少的mutation
    DECREAMENT(state){
        state.count--
    }
}
 //包含多个事件回调函数的对象
const actions = {
    increament({commit}){
        commit('INCREAMENT')   //提交mutation
    },
    decreament({commit}){
        commit('DECREAMENT')   //提交mutation
    },
    increaOdd({commit, state}){
        if(state.count%2===0)
        commit('INCREAMENT')
    },
    increaAsync({commit}){
        setTimeout(()=>{
            commit('INCREAMENT')
        }, 600)
    }
}
//包含多个getter计算属性的对象
const getters = {
    type(state){   //不需要调用，只需要读取属性值
        return state.count%2===0?'偶数':'奇数'
    }
}

export default new Vuex.Store({
    state, //状态对象   所有组件对象都多了一个属性$store
    mutations,  //多个更新state函数的对象
    actions,  //包含多个事件回调函数的对象
    getters  //包含多个getter计算属性的对象
})




