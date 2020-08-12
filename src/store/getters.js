//包含所有基于state的getter计算属性
export default {
    //总数量
    totalCount(state){
        return state.todos.length
    },
    //完成的数量
    cmpleteSize(state){
        return state.todos.reduce((preTotal, todo)=> preTotal + (todo.complete?1:0), 0)
    },
    //判断是否全部选择
    isAllSelected(state, getters){
        return  getters.cmpleteSize === getters.totalCount && getters.cmpleteSize>0
    }
}