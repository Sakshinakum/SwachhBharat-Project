import axios from "axios";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useDispatch } from "react-redux";
import { loginRequestAction, loginRequestFail, loginRequestSuccess } from "./Redux/Action/authAction";

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // let email = useWatch("email")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
        email : email,
        password : password
    }
    dispatch(loginRequestAction());
     axios
      .post("http://localhost:3001/api/noAuth/users/login", data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/dashboard");
          dispatch(loginRequestSuccess(res.data.data));
        }
      })
      .catch((err) => {
        dispatch(loginRequestFail(err));
        console.log(err);
      });
  };

  return (
    <>
      <div className="maindiv">
        <h1 className="title">SwachhBharat</h1>
        <div>
          <form className="formdata" onSubmit={handleSubmit}>
            <p>Sign in to start your session</p> <br />
            <input
              type="text"
              // {...register("email", {required: true})}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail address"
              />
              {/* {errors.email && <span>This field is required</span>} */}
            <br />
            <br />
            <input
              type="password"
              // {...register("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
