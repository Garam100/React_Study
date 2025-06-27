import './App.css';
import TodoList from './TodoList';

const App: React.FC = () =>{
  return(
    <div>
      <TodoList title = "오늘 할일"></TodoList>
    </div>
  );
}

export default App;