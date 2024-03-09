import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  /* FaFacebook, */
  /* FaLinkedinIn, */
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

/* <img src={Logo} alt="Logo image" style={{ width: "50px" }} /> */
/* import Logo from "../assets/react.png"; */

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div></div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="nav-item">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="transition-color hover:text-pink-600"
          >
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="transition-color hover:text-pink-600"
          >
            Acerca
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="transition-color hover:text-pink-600"
          >
            Habilidades
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="transition-color hover:text-pink-600"
          >
            Portafolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="transition-color hover:text-pink-600"
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li>
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Acerca
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portafolio
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/federico-peregrin-laviero-0b9b8b259/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/fede1678"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1vLCLGjlgcST_6pg882cSxOS19N2ioeUF/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
