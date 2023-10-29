import { useDeferredValue } from "react";
import type { Task } from "./Transition";

type Props = {
  taskList: Task[];
};

export const TaskList = ({ taskList }: Props) => {
  // コンポーネント側でtransition機能を担保させたいときには、useDefferedValue()が使える。
  // ただ、できる時にはuseTransitionを使ってpending機能を持たせてあげる方が良い。
  const defferedTaskList = useDeferredValue(taskList);
  return (
    <>
      {defferedTaskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: "380px",
            margin: "auto",
            backgroundColor: "lavender",
          }}
        >
          <p>タイトル: {task.title}</p>
          <p>担当者: {task.assignee}</p>
        </div>
      ))}
    </>
  );
};
