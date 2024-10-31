import { useNavigate } from "react-router-dom";

export function Usercolumn({ firstname, lastname, id }) {
  const navigate = useNavigate();
  return (<center>
    <div className="flex justify-between items-center mt-2 w-11/12 ">
      <div className="mr-8 ml-2 flex justify-between ">
        <div className="w-8 h-8  rounded-full bg-blue-900 text-white shadow-md  text-center text-md p-1 ">
          {firstname[0].toUpperCase()}
        </div>
        <span className="font-bold ml-4 text-md">
          {firstname} {lastname}
        </span>
      </div>

      <div>
        <button
          className="bg-cyan-500 md:w-full text-white shadow-xl rounded-md text-xs md:text-sm p-2 font-semibold mr-7 mb-2"
          onClick={() => {
            navigate("/Send?id=" + id + "&name=" + firstname);
          }}
        >
          Send Money
        </button>
      </div>
    </div>
    </center>
  );
}
