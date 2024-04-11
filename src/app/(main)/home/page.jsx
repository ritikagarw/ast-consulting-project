"use client";

import Button from "../../../components/Button/Button";
import { useState } from "react";
import "./home.css";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="home">
      {show && <p className="text">Hello 👋</p>}
      <Button onClick={handleOnClick} text="Click me" />
    </div>
  );
};

export default Home;
