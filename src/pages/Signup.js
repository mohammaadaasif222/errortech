import React, { useRef, useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { setUserInfo } from "../redux/orebiSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Import useNavigate hook
  const {userInfo} = useSelector((state)=> state.orebiReducer)
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  useEffect(()=>{
    if(userInfo){
      navigate('/myaccount')
    }
  },[])
  const { email, password, cPassword } = formData;
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const refPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(formData));

    setFormData({
      email: "",
      password: "",
      cPassword:""
    });
    setShowPass(false);
    
    navigate("/"); 
  };

  const canSignIn = [email, password].every(Boolean);

  return (
    <div className="login-wrapper">
      <div>
        <form onSubmit={handleSubmit} className="common-background">
          <h2>SIgn Up</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
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
              onChange={handleChange}
              id="password"
              name="password"
              value={password}
              required
            />
            {showPass ? (
              <i onClick={showPassword}>{<BsEye />}</i>
            ) : (
              <i onClick={showPassword}>{<BsEyeSlash />}</i>
            )}
          </div>
          <label htmlFor="cpassword">Confirm Password:</label>
          <div className="eye">
            <input
              ref={refPassword}
              type="password"
              onChange={handleChange}
              id="cPassword"
              name="cPassword"
              value={cPassword}
              required
            />
            {showPass ? (
              <i onClick={showPassword}>{<BsEye />}</i>
            ) : (
              <i onClick={showPassword}>{<BsEyeSlash />}</i>
            )}
          </div>
          <button className="loginButton" type="submit" disabled={!canSignIn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
