import axios from "axios";

const authLogin = async (email, password) => {
  let authResponse;
  try {
    const response = await axios.post("/auth/sign_in", {
      email: email,
      password: password,
    });
    storeAuthCredentials(response);
    return (authResponse = { data: response.data.data, authenticated: true });
  } catch (error) {
    return (authResponse = {
      authenticated: false,
      data: error.response.data.errors[0],
    });
  }
};

const storeAuthCredentials = ({ headers }) => {
  const credentials = {
    uid: headers["uid"],
    client: headers["client"],
    access_token: headers["access-token"],
    expiry: headers["expiry"],
    token_type: "Bearer",
  };
  sessionStorage.setItem("credentials", JSON.stringify(credentials));
};

export { authLogin };
