import React from "react";
import Header from "../../components/header/Header";

const ErrorEl = React.memo(({ message }) => {
  const containerStyle = {
    textAlign: "center",
    padding: "30px 0",
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h1>Xin lỗi, Đã có lỗi xảy ra!!!</h1>
        <h2>{message || "Vui lòng kiểm tra lại"}</h2>
      </div>
    </>
  );
});

export default ErrorEl;