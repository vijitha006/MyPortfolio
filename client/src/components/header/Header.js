import React from "react";
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const move = (contact) => {
    return window.location.href = '#contact';
  }
  return (
    <div className="intro">
      <div className=" w-100 text-end align-items-end icons">
        <a href="https://github.com/vijitha006/vijitha006.github.io" target="_blank" rel="noreferrer" aria-label="github" className="text-decoration-none"><span className="bi bi-github custom_github" ></span></a>
        <a href="https://www.linkedin.com/in/vijithasanthosh/" target="_blank" rel="noreferrer" aria-label="linkedin" className="text-decoration-none"><span className="bi bi-linkedin custom_linkedin"></span></a>
      </div >
      <div className="d-flex flex-column align-items-center justify-content-center introduction">
      <h2 className=" fw-bold  text-white heading2"> Welcome</h2>
      <h1 className=" text-center text-white heading1">I'm <span className=" text-danger font-weight-bold">Vijitha </span> Santhosh</h1>
      <h2 className="fw-bold text-white heading2">Web Developer</h2>
      <div className=" d-flex justify-content-center mt-3">
        <button onClick={() => move('contact')}>Contact Me</button>
      </div>
      </div>
    </div>
  )
}
export default Header;