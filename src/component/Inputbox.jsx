 export function Inputbox({placeholder,type,setvalue}) {
   return <>
    <input
                  onChange={(e) => {
                    setvalue(e.target.value);
                  }}
                  className="border border-1 border-gray-300 w-11/12 pl-2 rounded-md text-xs mt-2 py-1 text-gray-500"
                  type={type}
                  placeholder={placeholder}
                ></input>
   </>
}