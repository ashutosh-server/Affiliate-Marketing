import Logo from "../Img/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="bg-[#550aa9] text-white">
      <div className=" ">
        <div className=" p-10 grid grid-cols-3 flex">
          <div>
            <img src={Logo} className="w-8 rounded-3xl"></img>
          </div>
          <div>
            <ul className="flex justify-evenly text-lg">
              <a href="#Home">
                <li className="hover:underline ">Home</li>
              </a>
              <a href="#partners">
                <li className="hover:underline">Partners</li>
              </a>
              <a href="#Marketing">
                <li className="hover:underline ">Marketing</li>
              </a>
              <a href="#Faq">
                <li className="hover:underline">FAQ</li>
              </a>
            <Link to={"/Home"}><button>Book List</button></Link>
            </ul>
          </div>
          <div className="">
            <Link to={"/"}>
            <button className="border inline-block px-4 py-2 rounded-2xl hover:bg-white hover:text-[#550aa9] font-semibold">
              Logout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;