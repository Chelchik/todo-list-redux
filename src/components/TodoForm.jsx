import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editText, selectText } from '../features/InputValue/inputValueSlice';
import { editTodos } from '../features/todos/Todos';

function TodoForm() {
  const inputValue = useSelector(selectText);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(editText(e.target.value));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.length >= 1) {
      dispatch(editTodos(inputValue))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Todo title' id='todo_title_input' onChange={handleInput} value={inputValue} />
      <input type="submit" value="Add" id='submit' />
    </form>
  )
}

export default TodoForm;