import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">로그인 하기</div>
      <form>
        <p className="home-id">아이디</p>
        <input type="text" className="home-id-input" />
        <p className="home-pw">비밀번호</p>
        <input type="password" className="home-pw-input" />
        <button className="home-login-btn">로그인</button>
        <button className="home-sign-up-btn">회원가입</button>
      </form>
    </div>
  );
}
