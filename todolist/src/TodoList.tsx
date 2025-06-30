import { useState } from 'react';
import './App.css';


type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}


const TodoList : React.FC = ()  =>{
    const [todos, setTodos ] = useState<Todo[]>([{id: 1, text: "밥먹기", isChecked : false}, {id: 2, text: "오후 근로하기", isChecked : false}, {id: 3, text: "청소하기", isChecked : false}]);

    const handleCheckboxChange = (itemId : number) =>{
        setTodos((prevItems)=>prevItems.map((item)=>
            item.id === itemId ? {...item, isChecked : !item.isChecked} : item))

    }

    return(
        <div>
            <h1 className='titlebk'>오늘 할일</h1>
            <div className='container'>
                <div className='board'>
                    <ul>
                       {
                        todos.map((todo)=>(<li key={todo.id}>
                            <input type="checkbox" onChange = {()=>{handleCheckboxChange(todo.id)}}></input>
                            <span>{todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>}</span>
                            </li>))
                       }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;
