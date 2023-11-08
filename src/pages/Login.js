import React, { useRef, useState,useSelector } from "react";
import { connect, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {BsEye, BsEyeSlash} from 'react-icons/bs'


function Login() {
  let dispatch = useDispatch()
  const history = useNavigate()
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  }
  const refPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
       var count = 0
      // registerVals.forEach((val)=>{
      //   if(val.email === formData.email && val.password === formData.password){
      //     count +=1
      //     if(val.email == logInvals.email){
      //       alert("You already Logged In")
      //       history.push({
      //         pathname:"/cart"
      //       })
      //     }
      //     else{
      //       dispatch(logInAction(formData))
      //      alert("Logged IN SUCESSFULLY")
      //      history.push({
      //       pathname:"/cart"
      //     })  
      //     }
      //   }
      // })
      // //If data Doesn't match or he is not registered Properly
      // if(count == 0 || registerVals.length == 0){
      //   alert("YOUR Details Are NOT CORRECT.PLEASE REGISTER")
      // history.push({
      //   pathname:"/signup"
      // })
      // }
    
    
    setFormData({
      email: "",
      password: ""
    });
    setShowPass(false);
  };

  const canSignIn =
  [email, password].every(Boolean); 

  return (
    <div className="login-wrapper ">
     <div> <form onSubmit={handleSubmit} className="common-background">
      <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={hangleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            autoFocus
            required
          />
        <label htmlFor="password">Password:</label>
        <div className="eye">
          <input
            ref={refPassword}
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            value={password}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{<BsEye/>}</i>
          ) : (
            <i onClick={showPassword}>{<BsEyeSlash/>}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignIn}>
          Login
        </button>
      </form></div>
    </div>
  );
}


export default Login
