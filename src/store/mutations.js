//包含多个优action触发去直接更新状态的方法对象
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETE} from './mutation-types'
export default {
    [ADD_TODO](state, {todo}){
        state.todos.unshift(todo)
    },

    [DELETE_TODO] (state, {index}){
        state.todos.splice(index, 1)
    },

    [SELECT_ALL_TODOS] (state, {check}){
        state.todos.forEach(todos=>{
            todos.complete = check
        })
    },

    [CLEAR_ALL_COMPLETE] (state){
        state.todos = state.todos.filter(item =>{
            return !item.complete
        })
    }
}