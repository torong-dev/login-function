import axios from "axios";

const api = axios.create({
  baseURL: "http://3.38.191.164",
});

// 회원가입 API
export const registerUser = async (id, password) => {
  try {
    console.log("==");
    const response = await api.post("/register", { id, password });
    console.log("response : ", response);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("이미 존재하는 사용자입니다.");
    } else if (error.response && error.response.status === 401) {
      throw new Error("id 또는 password가 존재하지 않습니다.");
    } else {
      throw error;
    }
  }
};

// 로그인 API
export const loginUser = async (id, password) => {
  try {
    const response = await api.post("/login", { id, password });
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      throw new Error("존재하지 않는 사용자입니다.");
    } else if (error.response && error.response.status === 401) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    } else {
      throw error;
    }
  }
};

// 인증 API
export const checkAuth = async (token) => {
  try {
    const response = await api.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("토큰이 만료되었습니다. 토큰은 60분간 유지됩니다.");
    } else if (error.response && error.response.status === 401) {
      throw new Error("잘못된 형식의 token입니다.");
    } else if (error.response && error.response.status === 401) {
      throw new Error("tokenType이 올바르지 않습니다.");
    } else {
      throw error;
    }
  }
};

export default api;
