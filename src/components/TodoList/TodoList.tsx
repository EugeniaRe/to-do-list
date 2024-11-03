import { IconTrashFilled } from "@tabler/icons-react";
import { Todo } from "@/app/page";
import classes from "./TodoList.module.css";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  return (
    <ul className={classes.list}>
      <h1 className={classes.title}>Список задач</h1>
      {todos.map((todo) => (
        <li className={classes.listItem} key={todo.id}>
          {todo.task}
          <button className={classes.btn} onClick={() => deleteTodo(todo.id)}>
            <IconTrashFilled color="#49464e" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
