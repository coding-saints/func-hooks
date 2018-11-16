import React, {useState} from 'react'
import './App.css'
function Todo({ todo, i, completeTodo, removeTodo }) {

  return <div 
            style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
            className="todo">
              {todo.text}
          <div>
            <button onClick={() => completeTodo(i)}>Complete</button>
            <button onClick={() => removeTodo(i)}>x</button>
          </div>
         </div>
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             className="input" 
             value={value} 
             onChange={e => 
             setValue(e.target.value)} 
             placeholder="Add Todo..." 
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about ReactJS',
      isCompleted: false
    },
    {
      text: 'Start Orientation videos',
      isCompleted: false
    },
    {
      text: 'Build serverless apps with React front-end',
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = i => {
    const newTodos = [...todos]
    newTodos[i].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = i => {
    const newTodos = [...todos]
    newTodos.splice(i, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, i) => (
        <Todo key={i} i={i} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App