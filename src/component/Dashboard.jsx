import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Usercolumn } from "./Usercolumn";
import { Animationuser } from "./Animationuser";

function useBalance() {
  const [balance, setbalance] = useState(0);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      async function balance() {
        const response = await axios.get(
          "https://payment-gateway-backend-1.onrender.com/api/v1/account/balance",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setbalance(response.data.balance);
      }
      balance();
    }, 5000);

    async function balance() {
      const response = await axios.get(
        "https://payment-gateway-backend-1.onrender.com/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setloading(false);
      setbalance(response.data.balance);
    }

    balance();
  }, [balance]);

  return { loading, balance };
}

function useData() {
  const [load, setloading] = useState(true);
  const [name, setname] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    setInterval(() => {
      async function userinfo() {
        const response = await axios.get(
          "https://payment-gateway-backend-1.onrender.com/api/v1/user/userprofile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setname(response.data.user.firstname);
        setid(response.data.user._id);
      }
      userinfo();
    }, 5000);

    async function userinfo() {
      const response = await axios.get(
        "https://payment-gateway-backend-1.onrender.com/api/v1/user/userprofile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setloading(false);
      let name=response.data.user.firstname;
      const capitalizedname = name.charAt(0).toUpperCase() + name.slice(1);
      setname(capitalizedname);
      setid(response.data.user._id);
    }
    userinfo();
  }, []);

  return { name, id, load };
}

function useDebounce(input) {
  const [debounced, setdebounced] = useState("");

  useEffect(() => {
    let intervalnumber = setTimeout(() => {
      setdebounced(input);
    }, 100);

    return () => {
      clearTimeout(intervalnumber);
    };
  }, [input]);

  return debounced;
}
export function Dashboard() {
  const navigate = useNavigate();
  const { balance, loading } = useBalance();
  const { name, id, load } = useData();
  const [filters, setfilter] = useState("");
  const [allusers, setallusers] = useState([]);
  const debounce = useDebounce(filters);

  const [data, setdata] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://payment-gateway-backend-1.onrender.com/api/v1/user/bulk?name=${debounce}`,
          {
            headers: {
              Authorization: `Bearer +${localStorage.getItem("token")}`,
            },
          }
        );
        setallusers(response.data.user);
      } catch (e) {
        console.error("Error fetching data" + e);
      }
    };

    setTimeout(() => {
      setdata(true);
    }, 1000);

    fetch();
  }, [debounce]);

  return (
    <>
      <div className="h-full w-full font-sans ">
        <div className="flex justify-between items-center  shadow-md  bg-white">
          <div className="flex font-bold ml-2 md:ml-12 text-3xl ">
            <img className="w-56 h-24" src="/Paytm-Logo.wine.png"></img>
          </div>
          <div className="mr-4 md:mr-16 flex justify-between ">
            <span className="font-semibold text-black  text-xl">
              Hello,{name}
            </span>{" "}
            <div className="w-7 h-7 rounded-full font-bold bg-blue-900 text-white  text-center text-sm p-1 ml-4">
              {name && name.length>0 ? name[0].toUpperCase() : ''}
            </div>
            <div>
              <button
                className="bg-white text-lg text-black  ml-4 font-semibold underline underline-offset-1"
                onClick={() => {
                  navigate("/logout");
                }}
              >
                Logout?
              </button>
            </div>
          </div>
        </div>

        <br></br>
        <div className="flex items-center font-bold ml-5 text-2xl">
          <p>Your Balance </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="darkblue"
            className="ml-2 mr-2 w-12 h-8"
          >
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
          </svg>
          : Rs &#160;{" "}
          {loading ? (
            <div class=" flex items-center mt-1 rounded-md ml-2 w-24 ">
              <div className="h-4 w-5/6 animate-pulse bg-slate-400 rounded-lg"></div>
            </div>
          ) : (
            <span className="text-green-600 font-normal"> {balance}/-</span>
          )}
        </div>
        <br></br>

        <div className="flex font-bold ml-6 items-center text-2xl">
          <p>Find Users..</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="darkblue"
            class="mx-1 w-12 h-8"
          >
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <br></br>
        <div className="text-center">
          <input
            onChange={(e) => {
              setfilter(e.target.value);
            }}
            className="w-11/12 pl-2 py-1 border border-1 border-gray-300 shadow-md rounded-md"
            type="text"
            placeholder="Search users..."
          ></input>
        </div>

        <br></br>
        {load ? (
          <div class="  rounded-md p-4 w-full mx-auto">
            <Animationuser></Animationuser>
            <Animationuser></Animationuser>
            <Animationuser></Animationuser>
            <Animationuser></Animationuser>
          </div>
        ) : allusers.length > 0 ? (
          allusers.map((users) =>
            users.id.trim() === id.trim() ? null : (
              <Usercolumn
                firstname={users.firstname}
                lastname={users.lastname}
                id={users.id}
              />
            )
          )
        ) : (
          <p className=" ml-8 text-black font-semibold text-lg">
            No Users Found..
          </p>
        )}
      </div>
    </>
  );
}
