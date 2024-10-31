import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();
  return (
    <>
      
      <div className="flex h-screen justify-center">
      <div>
        <img className="w-60 ml-5 h-32 " src="Paytm-Logo.wine.png"></img>
        <div className="w-72 h-68 border border-l-1 bg-white shadow-xl">
          <div className="text-center p-4 pt-4 text-2xl leading-tight mb-8">
            <p className="text-3xl font-semibold">Logout</p>
            <p className=" pt-4 font-thin">Are you sure you want to Logout? </p>
          </div>
          <div className="flex mt-8 h-12 ">
            <button
              className="w-1/2 h-12 bg-white hover:bg-cyan-700 text-black"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/Signin", { replace: true });
              }}
            >
              Yes
            </button>
          
          
            <button
              className="w-1/2 h-12 border border-1 border-cyan-500 hover:bg-cyan-700 bg-cyan-500 text-white"
              onClick={() => {
                navigate("/Dashboard");
              }}
            >
              No
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
