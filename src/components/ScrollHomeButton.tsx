import React from "react";

interface Props {
  onClick: () => void;
  icon: string;
}

const ScrollHomeButton: React.FC<Props> = ({ onClick, icon }) => (
  <a onClick={onClick}>
    <img src={icon} alt="Home" />
  </a>
);

export default ScrollHomeButton;
