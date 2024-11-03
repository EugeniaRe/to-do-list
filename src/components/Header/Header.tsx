import { useState } from "react";
import { IconPlus, IconClearAll } from "@tabler/icons-react";
import classes from "./Header.module.css";

interface HeaderProps {
  addTodo: (text: string) => void;
  deleteAllTodos: () => void;
}

const Header = ({ addTodo, deleteAllTodos }: HeaderProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={classes.header}>
      <button
        className={`${classes.btn} ${classes.add}`}
        onClick={handleAddTodo}
      >
        <IconPlus />
        Добавить
      </button>
      <input
        className={classes.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Пополните список..."
      />
      <button
        className={`${classes.btn} ${classes.clear}`}
        onClick={deleteAllTodos}
      >
        Очистить <IconClearAll />
      </button>
    </div>
  );
};

export default Header;
