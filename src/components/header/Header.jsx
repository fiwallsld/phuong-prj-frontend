import "./header.css";
import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Navbar from "../navbar/Navbar";

const Header = ({ type }) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="header-body">
          <div id="header-logo-container" className="header-logo-container">
            <img src="/phuong/images/logo.png" alt="logo" />
          </div>

          <div id="header-text-container" className="w-100 text-center">
            <h2 className="text-3xl font-bold text-purple-800">
              QUÂN ĐOÀN 3
            </h2>
            <h1 className="text-red-500 text-5xl font-bold my-1 mb-7">
              TRƯỜNG QUÂN SỰ
            </h1>
            <h4 className="text-yellow-300 text-xl font-semibold tracking-wider">
              TỰ LỰC - TỰ CƯỜNG - DŨNG CẢM - SÁNG TẠO - ĐOÀN KẾT - KỶ LUẬT - DẠY TỐT - HỌC TỐT
            </h4>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
