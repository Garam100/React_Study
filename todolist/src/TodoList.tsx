import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './App.css';
import Clock from './Clock';


type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}


const TodoList : React.FC = ()  =>{
    const [todos, setTodos ] = useState<Todo[]>([{id: 1, text: "밥먹기", isChecked : true}, {id: 2, text: "오후 근로하기", isChecked : false}, {id: 3, text: "청소하기", isChecked : true}]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckboxChange = (itemId : number) =>{
        setTodos((prevItems)=>prevItems.map((item)=>
            item.id === itemId ? {...item, isChecked : !item.isChecked} : item))

    }
    const addTodo = () => {
        if(newTodo.trim() !==''){
            setTodos([...todos, {id: Date.now(), text : newTodo, isChecked: false}]);
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) =>{
        setTodos(todos.filter((todo)=>{
            return todo.id !== id;
        }))
    }

    const handleTodoClick = (todo: Todo)=>{
        console.log("게시물 선택");
        setShowDetail(true);
    }

    const hadleCloseDetail = () =>{
        setShowDetail(false);
    }

    return(
        <div className='container mt-5'>
            <h1 className='titlebk'>오늘 할일</h1>

            <div className='form-group d-flex align-items-center mb-3'>
                <input type='text' className='form-control me-2' placeholder = "할일 입력" onChange = {(e)=> setNewTodo(e.target.value)} value = {newTodo} style={{writingMode: 'horizontal-tb'}}/>
                <button className = 'btn btn-success' onClick = {addTodo}style = {{whiteSpace : 'nowrap'}}>추가하기</button>
            </div>

            <div className='card'>
                <div className='card-body'>
                    <ul className='list-group'>
                       {todos.map((todo)=>(
                        <li key={todo.id} className='list-group-item d-flex justify-content-between align-items-center'>
                            <div className='form-check'>
                            <input type="checkbox" className = 'form-check-input' checked = {todo.isChecked} onChange = {()=>{handleCheckboxChange(todo.id)}}></input>
                            <label className='form-check-label'>{todo.isChecked ? <del>{todo.text}</del> : <span onClick={() => { handleTodoClick(todo)}}>{todo.text}</span>}</label>
                            </div>
                            <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}>삭제</button>
                            </li>))
                       }
                    </ul>
                </div>
            </div>
            <Modal show = {showDetail} onHide={hadleCloseDetail} centered>
                <Modal.Header closeButton>
                    <Modal.Title>상세정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    자세한 정보를 출력합니다.
                    <p>현재 날짜: {new Date().toLocaleDateString()}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = 'secondary' onClick={hadleCloseDetail}>Close</Button>
                </Modal.Footer>
            </Modal>
            {/* <Timer></Timer> */}
            <Clock></Clock>
        </div>
    )
}

export default TodoList;
