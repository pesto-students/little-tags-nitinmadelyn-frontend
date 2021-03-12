import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main>
      <div
        className="login-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "49.8vh",
        }}
      >
        <h2>404: Page not Found</h2>

        <Link to="/" className="button-red" style={{ marginLeft: "2vw" }}>
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default Error;
