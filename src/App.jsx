import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter'

function App() {
  return (
    <div className="root">
        <div className="todosBox">
          <TodoForm />
          <TodoList />
          <TodoFooter />
        </div>
    </div>
  );
}

export default App;
