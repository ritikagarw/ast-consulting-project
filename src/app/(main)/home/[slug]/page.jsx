"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../../../components/Button/Button";
import "./homeDynamic.css";

const HomeDynamic = ({ params }) => {
  const notify = () => toast.success(params.slug);
  return (
    <div className="homeDynamic">
      <Button onClick={notify} text="Pop Up" />
      <Toaster />
    </div>
  );
};

export default HomeDynamic;
