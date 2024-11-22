export function todosReducer(state=initailTodosState, action) {
    if (action.type === "TODO_ADD") {
        return [
                ...state,
                action.payload
            ]

    } else if (action.type === "TODO_DELETE") {
        return state.filter((todo) => todo.id !== action.payload.id);
    
    } else if (action.type === "TODO_CHECK") {
        return state.map((todo) => {
            if (todo.id === action.payload.id) {
                return  { ...todo, isCompleted: !todo.isCompleted };
            } else {
                return todo
            }
        })
    } else if (action.type === "CLEAR_TODO") {
        return state.filter((todo) => !todo.isCompleted)
    }

    return state
}

export const initailTodosState = [
    {
        id: Math.random(),
        title: "React",
        isCompleted: false
    },
    {
        id: Math.random(),
        title: "Redux",
        isCompleted: false
    },
    {
        id: Math.random(),
        title: "Redux-toolkit",
        isCompleted: false
    },
]



export function selectTodos(state) {
    return state.todos;
}

export function selectTodoDelete(state) {
    return state.todos;
}

export function selectCheckInput(state) {
    return state.todos;
}

export function selectClearCompleted(state) {
    return state.todos;
}




export function editTodos(text) {
    return {
        type: "TODO_ADD",
        payload: {
            id: Math.random(),
            title: text,
            isCompleted: false
        }
    };
}

export function deleteTodo(id) {
    return {
        type: "TODO_DELETE",
        payload: {
            id: id
        }
    };
}

export function CheckInput(id) {
    return {
        type: "TODO_CHECK",
        payload: {
            id: id
        }
    };
}

export function clearCompleted(id) {
    return {
        type: "CLEAR_TODO",
        payload: undefined
    };
}