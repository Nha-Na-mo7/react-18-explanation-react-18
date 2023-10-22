import { useState } from "react";

export const AutoBatchEventHandler = () => {
  console.log("- AutoBatchEventHandler - ");
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  const onClickUpdateButton = () => {
    console.log(`${state}`);
    setState((state) => state + 1);
    console.log(`${state2}`);
    setState2((state2) => state2 + 1);
  };

  return (
    <div>
      <p>Automatic batching 確認用イベントハンドラ</p>
      <button type="button" onClick={onClickUpdateButton}>
        State 加算更新
      </button>
      <p>state1: {state}</p>
      <p>state2: {state2}</p>
    </div>
  );
};
