import React, { useState } from "react";

const SubmitName = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [visible, setVisisble] = useState(false);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
        flexDirection: "column",
      }}
    >
      {!visible && (
        <form action="" onSubmit={() => setVisisble(true)}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name..."
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email..."
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {visible && (
        <div style={{ marginTop: 50 }}>
          <p>
            <b>Name: </b>
            {data.name}
          </p>
          <p>
            <b>Email: </b>
            {data.email}
          </p>
          <button type="btn" onClick={() => setVisisble(false)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default SubmitName;
