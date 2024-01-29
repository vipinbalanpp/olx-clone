import { GoogleLoginButton } from "react-social-login-buttons";
import { FaX } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import {  auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
const Login = () => {
  const {login} = useContext(AuthContext);
  const {setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate()
  const signInwithGoogle = async () => {
    try {
      signInWithPopup(auth,provider).then((data)=>{
          login();
          setCurrentUser(data.user)
          navigate('/');
        })
    } catch (err) {
      console.log(err.message);
      alert(`err is ${err}`);
    }
  };

    return (
      <div>
        <Link to={'/'}>
        <GoArrowLeft className='text-3xl' />
        </Link>
      
        <div className="bg-blue-100 w-full h-full flex items-center justify-center absolute z-10">
           
      <div className="relative w-[400px] h-[500px] bg-gray-800 rounded-lg p-8">
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <Link to={'/'} >
         <FaX style={{ color: 'white' }} /></Link>
         </div>
        <h2 className="text-3xl font-semibold text-white mb-4">Login</h2>
        <div className="mt-4">
          <form>
            <input
              className="w-full p-2 mb-2 rounded-md"
              type="text"
              placeholder="Enter username"
            />
          
            <input
              className="w-full p-2 mb-4 rounded-md"
              type="password"
              placeholder="Enter password"
            />
            <button
              className="w-full bg-red-500 mb-10 text-white p-2 rounded-md"
              type="submit"
            >
              Login
            </button> 
          </form>
        </div>
        <GoogleLoginButton onClick={signInwithGoogle}/>
        
      </div>
    </div></div>
        
    );
};
export default Login;