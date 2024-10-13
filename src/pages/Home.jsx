import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <h1>Home Page</h1>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Home;
