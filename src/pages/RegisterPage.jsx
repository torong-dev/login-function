import React from "react";
import AuthForm from "../components/AuthForm";
import useRegisterPage from "../hooks/useRegisterPage";

const RegisterPage = () => {
  const {
    handleLoginpageClick,
    handleTopBtnClick,
    handleIdChange,
    handlePasswordChange,
  } = useRegisterPage();

  return (
    <AuthForm
      title="회원가입"
      topBtnText="회원가입"
      bottomBtnText="로그인하기"
      onTopBtnClick={handleTopBtnClick}
      onBottomBtnClick={handleLoginpageClick}
      onIdChange={handleIdChange}
      onPasswordChange={handlePasswordChange}
    />
  );
};

export default RegisterPage;
