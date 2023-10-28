import { useState, startTransition } from "react";
import { Avatar } from "./Avatar";

type Task = {
  id: number;
  title: string;
  assignee: string;
};
const member = {
  a: "A",
  b: "B",
  c: "C",
};
const generateDummyTasks = (): Task[] => {
  return Array(10000)
    .fill("")
    .map((_, index) => {
      const addedIndex = index + 1;
      return {
        id: addedIndex,
        title: `タスク${addedIndex}`,
        assignee:
          addedIndex % 3 === 0
            ? member.a
            : addedIndex % 2 === 0
            ? member.b
            : member.c,
      };
    });
};
const tasks = generateDummyTasks();
const filteringAssignee = (assignee: string) => {
  if (assignee === "") return tasks;
  return tasks.filter((tasks) => tasks.assignee === assignee);
};

export const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee);
    startTransition(() => {
      setTaskList(filteringAssignee(assignee));
    });
  };

  return (
    <div>
      <h3>Transition</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          isSelected={selectedAssignee === member.a}
          onClick={onClickAssignee}
        >
          {member.a}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.b}
          onClick={onClickAssignee}
        >
          {member.b}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.c}
          onClick={onClickAssignee}
        >
          {member.c}
        </Avatar>
      </div>
      <br />
      <button type="button" onClick={() => onClickAssignee("")}>
        リセット
      </button>
      {taskList.map((task) => {
        return (
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
        );
      })}
    </div>
  );
};