//包含多个接收组件通知，调触发mutation，简介更新状态的的方法的对象
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETE, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtils'
export default {
    addTodo({commit}, todo){
        commit(ADD_TODO, {todo})
    },

    deleteTodo({commit}, index){
        commit(DELETE_TODO, {index})
    },

    selectAllTodos({commit}, check){
        commit(SELECT_ALL_TODOS, {check})
    },
    
    clearAllComplete({commit}){
        commit(CLEAR_ALL_COMPLETE)
    },
    //异步获取todos更新状态
    reqTodos({commit}){
        setTimeout(()=>{
            const todos = storageUtil.readTodos()
            commit(RECEIVE_TODOS, todos)
        }, 1000)
    }
}

