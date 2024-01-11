import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/api";

const useRegisterPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginpageClick = () => {
    navigate("/");
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTopBtnClick = async (e) => {
    console.log("회원가입버튼누름!");

    e.preventDefault();

    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const { token } = await api.registerUser(id, password);
      alert("회원가입이 완료되었습니다.");
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
      } else {
        alert(`회원 가입 실패: ${error.message}`);
      }
    }
  };

  return {
    handleLoginpageClick,
    handleTopBtnClick,
    handleIdChange,
    handlePasswordChange,
  };
};

export default useRegisterPage;
