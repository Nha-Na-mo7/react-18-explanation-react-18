import { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const AutoBatchOther = () => {
  console.log("= AutoBatchOther =");
  // よくあるのはAPIを実行した時のPromise内部など

  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [isFinishApi, setIsFinishApi] = useState(false);
  const [state3, setState3] = useState("");

  const onClickExecuteApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setIsFinishApi(true);
        setState3("setState3");
      });
  };

  return (
    <div>
      <p>Automatic batching 確認用(イベントハンドラではない)</p>
      <p>state3: {state3}</p>
      <button type="button" onClick={onClickExecuteApi}>
        API実行！
      </button>
      <p style={{ textDecoration: "underline" }}>
        isFinishApi: {isFinishApi ? "true" : "false"}
      </p>
      {todos?.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};
