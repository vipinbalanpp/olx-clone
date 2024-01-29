import { useContext, useState } from "react";
import { BiTargetLock, BiCheck, BiPlus } from "react-icons/bi";
import { FiSearch, FiChevronDown, FiChevronUp, FiMapPin } from "react-icons/fi";
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";



const Navbar = () => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [dropDownActiveLang, setDropDownActiveLang] = useState(false);
  const {isLoggedIn,login,logout} = useContext(AuthContext);
  const {user} = useContext(UserContext);
  const handleLogout = () => {
    logout();
  }
  const toggleDropDownActive = () => {
    setDropDownActive(!dropDownActive);
  };
  const toggleDropDownActiveLang = () => {
    setDropDownActiveLang(!dropDownActiveLang);
  };
;
  return (
    <>
    <nav className="flex px-[130px] py-2 -mt-16 bg-gray-100 items-center border-b-4 border-white shadow z-20 fixed w-full">
      <div>
        <img
          src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
          alt="Something"
          className="w-11"
        />
      </div>
      {/* Search Location */}
      <div
        className={`flex items-center gap-2 border-2 rounded py-2 px-2 mx-2 bg-white ${
          dropDownActive ? "border-cyan-500" : "border-black"
        }`}
      >
       
        <FiSearch />
        <input
          value="India"
          placeholder="Search City, area and locality"
          className="outline-none"
          onFocus={() => toggleDropDownActive()}
          onBlur={() => toggleDropDownActive()}
        />
        <span className="cursor-pointer">
          {dropDownActive ? (
            <FiChevronUp className="text-2xl" />
          ) : (
            <FiChevronDown className="text-2xl" />
          )}
        </span>
        {/* Drop Down */}
        {dropDownActive && (
          <div className="absolute top-14 bg-white w-60 left-24 shadow-xl">
            <div className="flex py-2 px-5 items-center gap-2 text-blue-600">
              <BiTargetLock className="text-2xl" />
              <div>
                <p className="font-semibold">Use current location</p>
                <p className="text-sm">Kaloor, Kochi, Kerala, India</p>
              </div>
            </div>
            <p className="px-5 py-3 border-t border-gray-300">
              Popular Locations
            </p>
            <ul>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Kerala
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Tamil Nadu
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Maharashtra
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Punjab
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Search Items */}
      <div className="flex items-center flex-grow border-2  border-black rounded  mx-2 bg-white">
        <input
          placeholder="Find Cars, Mobile Phones and more..."
          className="w-full outline-none py-2 px-2"
        />
        <div className="bg-black p-2">
          <FiSearch className="text-white text-2xl" />
        </div>
      </div>

      {/* Language Dropdown */}
      <div
        className="flex items-center gap-2 py-2 px-2 mx-2 cursor-pointer"
        onClick={() => toggleDropDownActiveLang()}
      >
        <p className="uppercase text-sm font-semibold">English</p>
        <span>
          {dropDownActiveLang ? (
            <FiChevronUp className="text-2xl" />
          ) : (
            <FiChevronDown className="text-2xl" />
          )}
        </span>
        {/* Drop Down */}
        {dropDownActiveLang && (
          <div className="absolute top-14 bg-white w-60 right-40 shadow-xl">
            <div className="arrow-up"></div>
            <ul>
              <li className="flex items-center justify-between gap-2 px-5 py-3 hover:bg-cyan-300">
                English
                <BiCheck className="text-3xl" />
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                Hindi
              </li>
            </ul>
          </div>
        )}
      </div>
      {isLoggedIn && (<img className="w-10 h-10 rounded-full me-5" src={user?.photoURL} alt="User" />)}
      

      {!isLoggedIn?(<Link to={'/signin'}>
      <button  className="py-3 px-2 font-bold underline hover:no-underline underline-offset-4 mr-3">
        Login
      </button>
      </Link>):(  <button onClick={handleLogout} className="py-3 px-2 font-bold underline hover:no-underline underline-offset-4 mr-3">
        Logout
      </button>)}
      <button className="bg-white py-2 px-5 rounded-full shadow uppercase font-bold flex items-center gap-2">
        <BiPlus /> Sell
      </button>

    </nav>
      </>
  );
}
export default Navbar;