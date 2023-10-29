import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const result = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return result.data;
};

export const TodoList = () => {
  const { data } = useSuspenseQuery<Todo[]>({
    queryFn: fetchTodos,
    queryKey: ["todos"],
  });

  return (
    <div
      style={{
        backgroundColor: "mistyrose",
        border: "2px solid gray",
        height: "300px",
        overflowY: "scroll",
      }}
    >
      <h2>Todo List</h2>
      {data.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};
