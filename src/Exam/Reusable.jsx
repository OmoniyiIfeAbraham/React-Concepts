import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
};

const Reuseable = () => {
    return <div>
        <Button onClick={() => alert(`Clicked`)} label={'First'} />
        <Button onClick={() => alert(`Clicked`)} label={'Second'} />
        <Button onClick={() =>alert(`Clicked`)} label={'Third'} />
    </div>
};

export default Reuseable;
