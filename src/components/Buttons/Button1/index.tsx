import React, { MouseEventHandler } from "react";
import "./styles.scss";

type ButtonProps = {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="button1" type="button">
      {text}
    </button>
  );
};

export default Button;
