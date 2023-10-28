import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isSelected?: boolean;
  onClick: (assignee: string) => void;
};

export const Avatar = ({ children, isSelected = false, onClick }: Props) => {
  const border = isSelected ? "3px solid orange" : "1px solid gray";

  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        border,
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "1.8",
        userSelect: "none",
        cursor: "pointer",
      }}
      onClick={() => onClick(`${children}`)}
    >
      {children}
    </div>
  );
};
