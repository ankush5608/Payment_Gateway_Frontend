export function Animationuser(){
    return(
        <>
        <div class="animate-pulse flex justify-between space-x-4  ml-2 mr-2 md:ml-10 md:mr-10 mt-4">
              <div className="flex items-center w-3/4">
                <div class="rounded-full bg-slate-400 w-9 h-9 md:h-9 md:w-9"></div>

                <div class="h-4 w-3/4 md:w-96 bg-slate-400 rounded-lg ml-8"></div>
              </div>
              <div class="rounded-xl bg-slate-400 w-1/4 sm:w-32"></div>
            </div>
        </>
    )
}