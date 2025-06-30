import { useState } from 'react';
import './App.css';


type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}


const TodoList : React.FC = ()  =>{
    const [todos, setTodos ] = useState<Todo[]>([{id: 1, text: "밥먹기", isChecked : true}, {id: 2, text: "오후 근로하기", isChecked : false}, {id: 3, text: "청소하기", isChecked : true}]);


    return(
        <div>
            <h1 className='titlebk'>오늘 할일</h1>
            <div className='container'>
                <div className='board'>
                    <ul>
                        <li>{todos[0].text}</li>
                        <li>{todos[1].text}</li>
                        <li>{todos[2].text}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;
