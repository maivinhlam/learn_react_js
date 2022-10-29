import "./App.css";
import "./components/add-box";
import "./components/list";
import TodoList from './features/todo-list'

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
