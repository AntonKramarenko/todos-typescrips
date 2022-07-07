import { ItemTodo } from "../types/data"
import { TodoItem } from "./TodoItem"


interface TodoListProps {
    todos: ItemTodo[],
    removeHandler: (id:number) => void,
    toggleCompleted: (id:number) => void,
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const {todos,removeHandler,toggleCompleted} = props

  return (
    <div>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} removeHandler={removeHandler} toggleCompleted={toggleCompleted}/>)}
    </div>
  )
}
