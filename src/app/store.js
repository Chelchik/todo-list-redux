import { combineReducers, createStore } from "redux";
import { initialInputValue, inputValueReducer } from "../features/InputValue/inputValueSlice";
import { initailTodosState, todos, todosReducer } from "../features/todos/Todos";

const store = createStore(combineReducers({
  todos: todosReducer,
  inputValue: inputValueReducer
}), {
  todos: initailTodosState,
  inputValue: initialInputValue,
});

export default store;