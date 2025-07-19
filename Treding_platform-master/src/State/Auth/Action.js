import axios from "axios";
import {
  GET_USER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./ActionTypes";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  const baseurl = "http://localhost:5455";

  try {
    const response = await axios.post(`${baseurl}/auth/signup`, userData);

    const user = response.data;

    console.log(user);

    dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
    console.log(error);
  }
};

// export const login = ({userData}) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });

//   const baseurl = "http://localhost:5455";

//   try {
//     const response = await axios.post(`${baseurl}/auth/signin`, userData.data);

//     const user = response.data;

//     console.log(user);

//     // dispatch({ type: LOGIN_SUCCESS, payload:user.jwt  });
//     dispatch({ type: LOGIN_SUCCESS, payload: { jwt: user.jwt, user: user.user } });

//     localStorage.setItem("jwt", user.jwt);
//     userData.navigate("/");
//     localStorage.setItem("jwt", response.jwt); // in Action.js

//      // Redirect after successful login
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE, payload: error.message });
//     console.log(error);
//   }
// };


export const login = ({ data, navigate }) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5455/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Login Response: ", result);

    if (result.status) {
      // Save token in localStorage
      localStorage.setItem("jwt", result.jwt);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result,
      });

      // ✅ Navigate to home after login
      navigate("/");
    } else {
      dispatch({
        type: "LOGIN_FAIL",
        payload: result.message || "Login failed",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.message || "Login error",
    });
  }
};



export const logout = ( ) => async (dispatch) => {
  localStorage.removeItem("jwt");
  localStorage.clear();
  dispatch({ type: LOGOUT });

 

 
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  const baseurl = "http://localhost:5455";

  try {
    const response = await axios.get(`${baseurl}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt.trim()}`,
      },
    });

    const user = response.data;

    console.log(user);

    dispatch({ type: GET_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
    console.log(error);
  }
};
