import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import Footer from "./components/common/Footer";
import DeleteBook from "./pages/DeleteBook";
import Login from "./pages/Login1";
import Signup from "./pages/Signup1";
// import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router> */}
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/app" element={<App />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    {/* </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
