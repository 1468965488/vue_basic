const TODOS_KEY = 'todos_key'

export default{
    saveTodos(todos){
        window.localStorage.setItem(TODOS_KEY, JSON.stringify(val))
    },
    readTodos(){
        return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
    }
}