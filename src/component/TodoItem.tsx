import { ItemTodo } from "../types/data"

interface TodoItemProp extends ItemTodo{
    removeHandler:(id:number) => void,
    toggleCompleted: (id:number) => void,
}
export const TodoItem: React.FC<TodoItemProp> = (props) => {
    const {id, value, complete,removeHandler,toggleCompleted} = props

  return (
    <div >
        <input type='checkbox' checked={complete}  onClick={() => toggleCompleted(id)}/>
        {value}
        <button onClick={() => removeHandler(id)}>X</button>
    </div>
  )
}
