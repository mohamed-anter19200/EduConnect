import axios from "axios";

export async function sendDataToSignUp(values, navigate, setToken) {
  try {
    const option = {
      url: "https://graduation-project-lilac-five.vercel.app/users/signup",
      method: "post",
      data: values,
    };

    const { data } = await axios.request(option);
    if (data.message === "success") {
      sessionStorage.setItem("Token",data.token)
      setToken(data.token);  
      navigate('/student');
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
}

export async function sendDataToLogIn(values, navigate, setToken) {
  try {
    const option = {
      url: "https://graduation-project-lilac-five.vercel.app/users/login",
      method: "post",
      data: values,
    };

    const { data } = await axios.request(option);
    if (data.message === "success") {
      sessionStorage.setItem("Token",data.token)
      setToken(data.token);
      navigate('/student');
    }
  } catch (data) {
    console.error("Error during login:", data.message);
  }
}

export function logout(navigate, setToken) {
  localStorage.clear()
  setToken(null);
  navigate("/login", { replace: true });
}
