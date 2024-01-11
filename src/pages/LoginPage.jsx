import React from "react";
import AuthForm from "../components/AuthForm";
import useLoginPage from "../hooks/useLoginPage";

const LoginPage = () => {
  const {
    handleRegisterpageClick,
    handleTopBtnClick,
    handleIdChange,
    handlePasswordChange,
  } = useLoginPage();

  return (
    <AuthForm
      title="로그인 하기"
      topBtnText="로그인"
      bottomBtnText="회원가입"
      onTopBtnClick={handleTopBtnClick}
      onBottomBtnClick={handleRegisterpageClick}
      onIdChange={handleIdChange}
      onPasswordChange={handlePasswordChange}
    />
  );
};

export default LoginPage;
