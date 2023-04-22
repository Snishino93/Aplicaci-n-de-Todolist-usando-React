import React, {useState} from 'react';


const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState('');

    //Añade tarea al pulsar 'Enter'
    const addTodo = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            setTodo([
                ...todo,
                inputValue
            ]);
            setInputValue('');
        }
    };

    //Elimina una tarea
    const deleteTodo = (index) => {
        const newTodo = todo.filter((_, i) => i !== index);
        setTodo(newTodo);
    };

    return (
        <div>
            <input type="text"
                value={inputValue}
                onChange={
                    (event) => setInputValue(event.target.value)
                }
                onKeyPress={addTodo}
                placeholder="Añadir tarea"/>
            <ul> {
                todo.length === 0 ? (
                    <li>No hay tareas, añadir tareas</li>
                ) : (todo.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <span className="delete-btn"
                            onClick={
                                () => deleteTodo(index)
                        }>
                            x
                        </span>
                    </li>
                )))
            } </ul>
        </div>
    );
};

export default TodoList;
