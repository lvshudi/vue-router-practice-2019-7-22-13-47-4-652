import axios from "axios"
export default {
    strict: true,
    state: {
        todoList: [
            
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        },
        
    },
    mutations: {
        handleCreateTodo(state, inputtingItem) {
            state.todoList.push({
                status: 'active',
                content: inputtingItem
            })
        },
        handleToggleActive(state, index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        handleFilter(state, currentFilter) {
            state.currentFilter = currentFilter;
        },
        initTodos(state, data) {
            state.todoList = data;
        }
    },
    actions: {
        fetchTodos(context) {
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function(response) {
                console.log(response.data);
                context.commit('initTodos', response.data);
            }).catch(function() {
                console.log('error');
            })
        },
        addTodo(context,inputtingItem) {
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
                id: '005',
                content: inputtingItem,
                status: 'active'
              }).then(function(response) {
                console.log(response.data);
                
            }).catch(function() {
                console.log('error');
            })
        }
    }
}
