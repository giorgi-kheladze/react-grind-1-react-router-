import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h2>404 | page not found</h2>
      <button onClick={() => navigate("/")}>Home Page</button>
    </div>
  );
};

export default ErrorPage;
