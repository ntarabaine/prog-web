import React, { ChangeEvent, useState } from "react";
import './styles.css'
import { FaTrash } from "react-icons/fa";

interface Todo{
    todo:string;
}

export function Todos(){

    const [todos, setTodos] = useState<Todo[]>([]);
    const [form, setForm] = useState<Todo>({todo:''});

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({...form,[name]: value})
    }

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        if(form.todo){
            setTodos([form, ...todos]);
            setForm({todo:""});
        }
    }

    const handleRemoveTodo = (index: number) => {
        const newTodos = todos.filter((_, idx) => idx != index)
        setTodos(newTodos)
    }

    return(
        <div className="div-form">
            <h1>minha lista de tarefas</h1>
            <form className="form-todo" onSubmit={handleSubmit}>
                <input type="text" name="todo" value={form.todo} placeholder="descreva sua tarefa" onChange={handleInputChange}/>
                <button className="form-btn" type="submit">Adicionar</button>
            </form>
            <div className="todo-list">
                {todos.length > 0 ? (todos.map((item, index) => (
                    <div className="todo-item" key={index}> 
                        <span>{item.todo}</span>
                        <button onClick={() => handleRemoveTodo(index)}><FaTrash/></button>
                    </div>
                ))) : (<div><span>Não há tarefas!</span></div>)} 
            </div>
        </div>
    );  
}