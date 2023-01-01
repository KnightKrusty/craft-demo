import React from "react";

const Error = ({ error }) => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
        marginTop: "2rem",
      }}
    >
      {error}
    </div>
  );
};

export default Error;
