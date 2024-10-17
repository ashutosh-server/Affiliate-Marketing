import { React, useState, } from "react";
import axios from "axios";
import "../pages/Login.css";
import Logo from "../components/Img/logo.png";
import { Link } from "react-router-dom";

export default function Signup() {
  
  const [Firstname, setFirstname] = useState("");
  // const [Lastname, setLastname] = useState("");
  const [EmailId, setEmailId] = useState("");
  const [Password, setpassword] = useState("");
  const [error, setError] = useState(false);
  // console.log(Firstname + " " + Lastname + " ");
  const handleSubmit = async (e) => {
    if (
      !Firstname ||
    
      !EmailId ||
      !Password
    ) {
      setError(true);
      e.preventDefault();
    }
    try {
      let resposnse = await axios.post("http://192.168.70.186:8000/signup", {
        Username: Firstname,
        Email: EmailId,
        Password: Password,
      });
      console.log("response",resposnse);
    } catch (error) {
      console.log(error);
    }
    // console.log("Enter Username:", Username, "Enter Password:", Password);
  };

  return (
    <section className="flex justify-center  " style={{ overflowY: "hidden" }}>
      <div className="bg-white py-20 mt-28 rounded-2xl">
        <div className="grid grid-cols-2 gap-10 ">
          <div className="font-semibold  ">
            <div className="flex inline-block  align-middle">
              <img src={Logo} className="mt-6"></img>
              <h1 className="text-3xl mt-32" style={{ textAlign: "center" }}>
                AFFILIATE MARKETING{" "}
              </h1>
            </div>
          </div>
          <form
            className=""
            onSubmit={handleSubmit}
            autoComplete="off"
            method="GET"
          >
            <div className="border-l  pl-10 grid-cols-2">
              <div className="text-2xl font-semibold">
                <h1>Signup Here</h1>
              </div>
              <div className="pt-2">
                <label>Name: </label>
                <div className="border inline-block border-black">
                  <input
                    type="text"
                    name="Firstname"
                    placeholder="Enter Name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <br />
                {error && Firstname.length <= 0 ? (
                  <label className="text-red-500">Firstname is not valid</label>
                ) : (
                  ""
                )}
              </div>
              {/* <div className="pt-2">
                <label>Lastname: </label>
                <div className="border inline-block border-black">
                  <input
                    type="text"
                    name="Lastname"
                    placeholder="Enter Lastname"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <br />
                {error && Lastname.length <= 0 ? (
                  <label className="text-red-500">Lastname is not valid</label>
                // ) : (
                  ""
                )}
              </div> */}
              <div className="pt-2">
                <label>Email ID:</label>&nbsp;
                <div className="border inline-block border-black">
                  <input
                    type="email"
                    placeholder="Enter EmailId"
                    name="EmailId"
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
                <br />
                {error && EmailId.length <= 0 ? (
                  <label className="text-red-500">EmailId is not valid</label>
                ) : (
                  ""
                )}
              </div>
              <div className="pt-2">
                <label>Password: </label>
                <div className="border inline-block border-black">
                  <input
                    type="password"
                    name="Firstname"
                    placeholder="Enter Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <br />
                {error && Password.length <= 0 ? (
                  <label className="text-red-500">Password is not valid</label>
                ) : (
                  ""
                )}
              </div>
              <div>
                <Link to={"/app"} onClick={handleSubmit}>
                  <button className="bg-[#550aa9] text-white mt-2 px-2 py-2 rounded-2xl">
                    Sign up
                  </button>
                </Link>
                <Link to={"/Login"}>
                  <p className="mt-2">If Already have account</p>
                  <button className="text-blue-800 font-semibold">
                    Login here
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
