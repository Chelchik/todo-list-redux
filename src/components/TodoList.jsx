import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem';
import { selectTodos } from '../features/todos/Todos';

function TodoList() {
    const todos = useSelector(selectTodos);
    console.log(todos);

  return (
    <div className='todos'>
        {
          todos.map((todo) => {
            return <TodoListItem key={todo.id} todo={todo} />
          })
        }
    </div>
  )
}

export default TodoList 