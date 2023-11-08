import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { setUserInfo } from "../redux/orebiSlice";
import { textTrim } from "../helper";

const MyAccount = () => {
  const { products } = useSelector((state) => state.orebiReducer);
  const { userInfo } = useSelector((state) => state.orebiReducer);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: userInfo.email,
    password: "",
  });

  const { email, password } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    dispatch(setUserInfo(formData));

    alert("Profile Updated Successfully!");
    setFormData({
      email: "",
      password: "",
    });
    setCpassword("");
    setOldPassword("");
    setShowPass(false);
  };

  const canSignIn = [email, password].every(Boolean);
  return (
    <div className="common-background">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="w-50 p-5 m-auto ">
              <h2 className="text-center">Update User</h2>
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
                  onChange={(e) => setOldPassword(e.target.value)}
                  value={oldPassword}
                  required
                />
                {showPass ? (
                  <i onClick={showPassword}>{<BsEye />}</i>
                ) : (
                  <i onClick={showPassword}>{<BsEyeSlash />}</i>
                )}
              </div>
              <label htmlFor="npassword">New Password:</label>
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
                  onChange={(e) => setCpassword(e.target.value)}
                  value={cPassword}
                  required
                />
                {showPass ? (
                  <i onClick={showPassword}>{<BsEye />}</i>
                ) : (
                  <i onClick={showPassword}>{<BsEyeSlash />}</i>
                )}
              </div>
              <button
                className="loginButton "
                type="submit"
                // disabled={!canSignIn}
              >
                Update
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="order-details">
              <table>
                <caption>Orders Details</caption>
                <thead>
                  <tr>
                    <th>ORDER ID</th>
                    <th>TIME STAMP</th>
                    <th>TOTAL</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>79324k</td>
                    <td>22102021</td>
                    <td>$336</td>

                    <td className="actions">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="info-circle"
                        className="svg-inline--fa fa-info-circle fa-w-16 info"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        ></path>
                      </svg>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="trash-alt"
                        className="svg-inline--fa fa-trash-alt fa-w-14 delete"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{textTrim(product.name, 2)}</td>
                      <td>22102021</td>
                      <td>$336</td>

                      <td className="actions">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="info-circle"
                          className="svg-inline--fa fa-info-circle fa-w-16 info"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                          ></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="trash-alt"
                          className="svg-inline--fa fa-trash-alt fa-w-14 delete"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
