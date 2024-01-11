import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/api";

const useLoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterpageClick = () => {
    navigate("/register");
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTopBtnClick = async (e) => {
    e.preventDefault();
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // API
    try {
      const { token } = await api.loginUser(id, password);
      console.log(token);
      // 토큰이 있다면
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("존재하지 않는 사용자입니다.");
      } else {
        alert(`로그인 실패: ${error.message}`);
      }
    }
  };

  return {
    handleRegisterpageClick,
    handleTopBtnClick,
    handleIdChange,
    handlePasswordChange,
  };
};

export default useLoginPage;
