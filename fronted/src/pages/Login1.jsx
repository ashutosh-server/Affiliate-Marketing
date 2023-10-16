import { React, useState } from "react";
import "../pages/Login.css";
import axios from "axios";

import Logo from "../components/Img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    if (!Email || !Password) {
      setError(true);
      e.preventDefault();
    } else {
      setError(true);
      e.preventDefault();
      // alert("Login is Invalid!");
    }
    try {
      let response = await axios.post("http://192.168.70.186:8000/login", {
        Email: Email,
        Password: Password,
      });
      console.log("response", response.data);
      if (response) {
        navigate("/app");
      } else {
        console.log("error");
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex justify-center py-32 ">
      <div className="bg-white py-20  px-20 flex grid grid-2  rounded-2xl">
        <div className="flex">
          <div className="font-semibold text-3xl p-8 px-10 flex">
            <img src={Logo} className="w-38"></img>
            <div className="mt-28  px-4">
              <h1>AFFILIATE MARKETING </h1>
            </div>
          </div>
          <form className="border-l px-4" onSubmit={handleSubmit}>
            <div className="lg:mt-8 px-4">
              <div className="text-2xl p-2 font-semibold">
                <h1>Login Here</h1>
              </div>
              <div>
                <div className="py-2">
                  <label>Email: </label>
                  <div className="border inline-block border-black">
                    <input
                      name="nickname"
                      type="text"
                      placeholder="Enter Username"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <br />
                  {error && Email.length <= 0 ? (
                    <label className="text-red-500">
                      Email is not valid
                    </label>
                  ) : (
                    ""
                  )}
                </div>
                <div className="py-2">
                  <label>Password: </label>
                  <div className="border inline-block border-black">
                    <input
                      name="nickname"
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                  {error && Password.length <= 0 ? (
                    <label className="text-red-500">
                      Password is not valid
                    </label>
                  ) : (
                    ""
                  )}
                </div>
                <Link to={"/app"} onClick={handleSubmit}>
                  <button className="bg-[#550aa9] text-white px-2 py-2 rounded-2xl">
                    Login
                  </button>
                </Link>
              </div>
              <div className="py-2">
                <h1>If you don't register yet</h1>
                <Link to={"/"}>
                  <button className="text-blue-800 font-semibold">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
