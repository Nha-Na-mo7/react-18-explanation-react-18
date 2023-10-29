import { Sidebar } from "./Sidebar";
import { AlbumList } from "./AlbumList";
import { TodoList } from "./TodoList";
import { ErrorBoundary } from "react-error-boundary";
import { useState, useTransition } from "react";

type Tabs = "todo" | "album";

export const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("todo");
  const [isPending, startTransition] = useTransition();

  const baseButtonStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "none",
    opacity: isPending ? 0.5 : 1,
  };
  const albumButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: selectedTab === "album" ? "royalblue" : "white",
    color: selectedTab === "album" ? "white" : "black",
  };
  const todoButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: selectedTab === "todo" ? "royalblue" : "white",
    color: selectedTab === "todo" ? "white" : "black",
  };

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <button
          style={todoButtonStyle}
          onClick={() => onClickTabButton("todo")}
        >
          Todo
        </button>
        <button
          style={albumButtonStyle}
          onClick={() => onClickTabButton("album")}
        >
          Album
        </button>
        <ErrorBoundary
          fallback={<p>Album or Todoのリストはエラーです^^君は愚かだ(・ᯅ・)</p>}
        >
          {selectedTab === "todo" ? <TodoList /> : <AlbumList />}
        </ErrorBoundary>
      </div>
    </div>
  );
};
