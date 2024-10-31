import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinAnimation } from "./SpinAnimation";
import axios from "axios";
import { Inputbox } from "./Inputbox";

export function Signup() {
  const [Message, setmessage] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setdata(true);
    }, 500);
  }, []);
  return (
    <>
      {data ? (
        <div className="bg-gray-200 h-screen w-full grid grid-cols-4 md:grid-cols-9 items-center shadow-3xl overflow-y-auto ">
          <div className="col-span-1 md:col-span-6">
            <div className="flex justify-center items-center">

          <img className="w-0 h-0 md:w-60 md:h-32" src="/Paytm-Logo.wine.png"></img>
            </div>

          </div>
          <div className="col-span-2 md:col-span-3  h-[28rem] bg-white w-72 md:w-11/12 mt-4  rounded-xl ">
            <div>
              <h1 className="text-center text-cyan-500 font-bold text-3xl pt-4">Sign Up</h1>
            </div>
            <center>
              <div className="text-center text-sm pt-2 px-4 leading-tight text-gray-500">
                Enter your information to create your account
              </div>
            </center>
            <div>
              <p className="font-bold text-black text-xs ml-4 pt-6 ">
                First Name
              </p>
              <center>
               <Inputbox placeholder="Enter your firstname" type="text" setvalue={setfirstname}/>
               
              </center>
            </div>

            <div>
      
              <p className="font-bold text-black mt-3 ml-4 text-xs">
                Last Name
              </p>
              <center>
                {" "}
                <Inputbox placeholder="Enter your lastname" type="text" setvalue={setlastname}/>

              </center>
            </div>

            <div>
              <p className="font-bold text-black mt-3 ml-4 text-xs">Email</p>
              <center>
                {" "}
                <Inputbox placeholder="Enter your email" type="text" setvalue={setemail}/>

              </center>
            </div>

            <div>
              <p className="font-bold text-black mt-3 ml-4 text-xs">Password</p>
              <center>
                {" "}
                <Inputbox placeholder="Enter your password" type="password" setvalue={setpassword}/>

              </center>
            </div>
            {Message.includes("successfully") ? (
              <p className="text-xs text-green-500 mx-4 pt-1 font-medium leading-tight">
                {Message}
              </p>
            ) : (
              <p className="text-xs text-red-500 mx-4 pt-1 font-medium  leading-tight">
                {Message}
              </p>
            )}

            <div>
              <center>
                {" "}
                <button
                  className=" bg-cyan-500 rounded-md text-white w-11/12 mt-2 text-xs py-1.5 hover:bg-cyan-700 "
                  onClick={async () => {
                    email.trim();
                    firstname.trim();
                    lastname.trim();
                    password.trim();
                    try {
                      const response = await axios.post(
                        "https://payment-gateway-backend-1.onrender.com/api/v1/user/signup",
                        {
                          username: email,
                          firstname: firstname,
                          lastname: lastname,
                          password: password,
                        },
                        {
                          headers: {
                            "Content-type": "application/json",
                          },
                        }
                      );
                      setmessage(response.data.message);
                      if (response.data.message.includes("successfully")) {
                        localStorage.setItem("token", response.data.token);
                        navigate("/Dashboard", { replace: true });
                      }
                    } catch (error) {
                      if (error.response && error.response.data) {
                        // Check if the error response has a message key
                        const errorMessage = error.response.data.message;
                        setmessage(
                          errorMessage ||
                            "An error occurred while signing up. Please try again."
                        );
                      } else {
                        // If no specific message in the error response, set a generic error message
                        setmessage(
                          "An error occurred while signing up. Please try again."
                        );
                      }
                    }
                  }}
                >
                  Sign up
                </button>{" "}
              </center>
            </div>
            <div className=" text-xs font-semibold text-center pt-1 pb-2">
              <h2>
                Already have an account?{" "}
                <button
                 onClick={()=>{
                  navigate('/Signin')
                 }}
                  className="text-cyan-500 hover:text-cyan-700 underline underline-offset-1 "
                  
                >
                  Login
                </button>
              </h2>
            </div>
          </div>
          <div className="col-span-1 md:col-span-0"></div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <SpinAnimation Message={"Loading..."} />
        </div>
      )}
    </>
  );
}
