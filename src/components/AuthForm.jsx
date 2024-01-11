import React from "react";

const AuthForm = ({
  title,
  topBtnText,
  bottomBtnText,
  onTopBtnClick,
  onBottomBtnClick,
  onIdChange,
  onPasswordChange,
}) => {
  return (
    <div className="auth-form">
      <div className="auth-form__header">{title}</div>
      <form>
        <p className="auth-form__input">아이디</p>
        <input
          onChange={onIdChange}
          type="text"
          className="auth-form__input__id"
        />
        <p className="auth-form__input">비밀번호</p>
        <input
          onChange={onPasswordChange}
          type="password"
          className="auth-form__input__pw"
        />
        <button onClick={onTopBtnClick} className="auth-form__top-btn">
          {topBtnText}
        </button>
        <button onClick={onBottomBtnClick} className="auth-form__bottom-btn">
          {bottomBtnText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
