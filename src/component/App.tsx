import { useEffect, useRef, useState } from "react"
import { ItemTodo } from "../types/data"
import { TodoList } from "./TodoList"

export const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ItemTodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)



    const addTodo =(valueInput:string): void=>{
        if(valueInput){
            setTodos([
                ...todos, {
                    id: Date.now(),
                    value: valueInput,
                    complete: false
                }
            ])
            setValue('')
        }
    }
    
    const toggleCompleted = (id:number):void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }
    const removeHandler = (id:number):void => {
        setTodos(todos.filter( todo => todo.id !== id))
    }

    const handleClick: React.KeyboardEventHandler<HTMLInputElement> =(e)=>{
        if(e.key === 'Enter'){
            addTodo(value)
        }
    }



    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

  return (
    <div>
       <div>
            <input type='text' 
                value={value} 
                onChange={e =>setValue(e.target.value)} 
                ref={inputRef}
                onKeyDown={handleClick}
                />
            <button onClick={()=> addTodo(value)}>Add</button>
       </div>
       <TodoList todos={todos} removeHandler={removeHandler} toggleCompleted={toggleCompleted}/>
    </div>
  )
}
