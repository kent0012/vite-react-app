import { NavLink } from "react-router-dom";
import { mainMenu } from "../constants/constants";
import { useEffect, useState } from "react";
import ButtonFilled from "./ButtonFilled";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [addBackground, setAddBackground] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 20) {
        setAddBackground(true);
      } else {
        setAddBackground(false);
      }
    };

    // Check background on mount
    changeBackground();

    // Add scroll event listener
    window.addEventListener("scroll", changeBackground);

    // Cleanup listener
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const showMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        addBackground ? "transparent-bg" : "bg-transparent"
      } p-4 w-full  text-white fixed z-30 shadow transition-all duration-500 ease-in-out`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between flex-row z-10 w-full md:flex-unset md:w-auto">
          <NavLink to="/">
            <h2 className="md:text-3xl text-2xl flex items-center space-x-2 font-[Poppins]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png"
                alt="VScode Logo"
                className="md:w-10 md:h-10 w-7 h-7 inline"
              />{" "}
              Muzan
              <span className="text-sky-500 font-semibold">Tech</span>
            </h2>
          </NavLink>
          <button
            onClick={showMobileMenu}
            className="relative w-10 h-10 block items-center justify-center cursor-pointer md:hidden "
          >
            <span
              className={`block w-8 h-1 ${
                isMenuOpen ? "bg-transparent" : "bg-white"
              } rounded-md relative transition-transform duration-300 ease-in-out
            before:content-[''] before:block before:absolute before:w-8 before:h-1 before:bg-white before:rounded-md before:transition-transform before:duration-300 before:ease-in-out
            after:content-[''] after:block after:absolute after:w-8 after:h-1 after:bg-white after:rounded-md after:transition-transform after:duration-300 after:ease-in-out
            ${
              isMenuOpen
                ? "bg-transparent before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0"
                : "before:-translate-y-2 after:translate-y-2"
            }`}
            ></span>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "py-20" : "top-[-3000px] md:top-0"
          } absolute bg-gray-800 flex-col transition-all duration-500 z-2 md:flex-row md:w-auto w-full left-0 top-0 h-screen md:h-auto md:flex md:items-center md:bg-transparent md:relative md:top-auto md:space-x-4 md:space-y-0  items-start md:p-0 p-4 space-y-4`}
          aria-label="main-navigation"
        >
          {mainMenu.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  `text-2xl hover:text-sky-500 transition-colors duration-200 capitalize ${
                    isActive ? "text-sky-500 " : ""
                  }`
                }
                to={item.url}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li className="flex items-center space-x-2 text-2xl hover:text-sky-500 transition-colors duration-200 capitalize">
            <span className="md:hidden block">Cart</span>
            <NavLink to="cart" className="relative">
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="absolute -top-1 -right-2 bg-red-700 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                25
              </p>
            </NavLink>
          </li>
          <li>
            <ButtonFilled type="button" btnName="Get Started" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
