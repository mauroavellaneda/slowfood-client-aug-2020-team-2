import axios from "axios";

// const authenticate = async (email, password, confirm_password ) => {
//   try {
//     const response = await axios.post("/auth/", {
//       email: email,
//       password: password,
//       confirm_password: confirm_password
//     });
//     await storeAuthCredentials(response);
//     return { authenticated: true };
//   } catch (error) {
//     return { authenticated: false, message: error.response.data.errors[0] };
//   }
// };

const authLogin = async (email, password) => {
  let authResponse
  try {
    const response = await axios.post("/auth/sign_in", {
      email: email,
      password: password,
    });
    await storeAuthCredentials(response);
    authResponse = { data: response.data.data, authenticated: true };
  } catch (error) {
    authResponse = {
      authenticated: false,
      data: error.response.data.errors[0],
    };
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
