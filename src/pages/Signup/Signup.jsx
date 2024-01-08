import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    if (!username || !password) alert("아이디와 비밀번호를 모두 입력해주세요.");
  };

  const handleLoginpageClick = () => {
    navigate("/");
  };
  return (
    <div className="signup">
      <div className="signup__header">회원가입</div>
      <form>
        <p className="signup__input">아이디</p>
        <input
          onChange={handleChangeUsername}
          type="text"
          className="signup__input__id"
        />
        <p className="signup__input">비밀번호</p>
        <input
          onChange={handleChangePassword}
          type="password"
          className="signup__input__pw"
        />
        <button onClick={handleLoginClick} className="signup__login-btn">
          회원가입
        </button>
        <button onClick={handleLoginpageClick} className="signup__signup-btn">
          로그인하기
        </button>
      </form>
    </div>
  );
}
