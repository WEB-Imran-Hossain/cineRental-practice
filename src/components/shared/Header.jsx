import { useState, useContext } from "react";
import React from "react";
import logo from "../../assets/icons/logo.svg";
import { BsBell } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import CartDetails from "../cart-details/CartDetails";
import { MovieContext, ThemeContext } from "../../context";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  console.log(state.cartData);

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <>
      {/* Begin header */}
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}

        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width={139} height={26} alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <BsBell className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                {darkMode ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCartShow}
              >
                <IoCartOutline className="w-5 h-5" />

                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
