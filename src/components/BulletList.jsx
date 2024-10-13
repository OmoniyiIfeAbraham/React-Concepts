import React from "react";

function BulletList({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </div>
  );
}

export default BulletList;
