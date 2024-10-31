export function SpinAnimation({Message}) {
    return (<>
     <div className="flex justify-center items-center w-full">
          <div
            class="animate-spin inline-block w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        <div className="text-center text-lg md:text-xl font-semibold shadow-3xl ml-1 md:ml-4">
         {Message}
        </div>
        </div>
        
    </>)
}