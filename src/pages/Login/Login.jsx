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

  const handleSignupClick = () => {
    navigate("/signup");
  };
  return (
    <div className="home">
      <div className="home__header">로그인 하기</div>
      <form>
        <p className="home__input">아이디</p>
        <input
          onChange={handleChangeUsername}
          type="text"
          className="home__input__id"
        />
        <p className="home__input">비밀번호</p>
        <input
          onChange={handleChangePassword}
          type="password"
          className="home__input__pw"
        />
        <button onClick={handleLoginClick} className="home__login-btn">
          로그인
        </button>
        <button onClick={handleSignupClick} className="home__signup-btn">
          회원가입
        </button>
      </form>
    </div>
  );
}
