import React from "react";

const ButtonComponent = ({ style, action, title }) => {
  return (
    <div>
      <button style={style} onClick={action}>
        {title}
      </button>
    </div>
  );
};

export default ButtonComponent;
