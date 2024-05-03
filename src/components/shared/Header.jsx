import React from 'react';
import logo from '../../assets/icons/logo.svg'
import { BsBell } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
  {/* Begin header */}
  <header>
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
            <BsBell className='w-5 h-5'/>
          </a>
        </li>
        <li>
          <a
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href="#"
          >
            <FiSun className='w-5 h-5'/>
          </a>
        </li>
        <li>
          <a
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href="#"
          >
            <IoCartOutline className='w-5 h-5' />
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