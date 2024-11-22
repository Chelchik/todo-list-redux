import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckInput, deleteTodo, selectCheckInput, selectTodoDelete } from '../features/todos/Todos'

function TodoListItem({todo}) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  const onCheck = () => {
    dispatch(CheckInput(todo.id))
  }

  return (
    <div className='todo'>
      <input type="checkbox" id={todo.id} checked={todo.isCompleted} onChange={onCheck} />

      <label htmlFor={todo.id}>{todo.title}</label>

      <button className='deleteBtn' onClick={onDelete}>Delete</button>
    </div>
  )
}

export default TodoListItem