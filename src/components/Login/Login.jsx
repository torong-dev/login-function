import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__header">로그인 하기</div>
      <form>
        <p className="home__input">아이디</p>
        <input type="text" className="home__input__id" />
        <p className="home__input">비밀번호</p>
        <input type="password" className="home__input__pw" />
        <button className="home__login-btn">로그인</button>
        <button className="home__signup-btn">회원가입</button>
      </form>
    </div>
  );
}
