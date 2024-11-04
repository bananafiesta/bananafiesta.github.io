
export function MainPage() {
  return(
    <body className="bg-slate-900">
      
  
      <div className="mx-auto min-h-screen py-0 px-24 max-w-screen-xl justify-between flex">
        {/* <div className="flex"> */}
        {/* left side */}
        <div className="flex flex-col max-h-screen w-1/2 justify-between sticky top-0 py-28">
          <div className="flex flex-col gap-10">
            {/* name stuff */}
            <div className="flex flex-row text-slate-300 items-center gap-8 text-4xl font-bold">
              <img src="/ScryersBloom.png" alt="Scryer's Bloom" className="rounded-full size-24"/>
              Victor Zhang
            </div>

            {/* short desc */}
            <div className="text-slate-400 text-lg">
              Certified Spindrift Connoisseur & Full Stack Enjoyer
            </div>
          </div>
          
          <div className="flex flex-col text-slate-300 gap-1">
            <p className="">
            👀 links to my stuff 👀
            </p>
            <div className="flex flex-row gap-2">
              <a href="https://github.com/bananafiesta">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24" className="rounded-full size-12" fill="currentColor">
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/victor-zhang-32962b194/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="size-12" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              
              
            </div>
          </div>
          
        </div>

        {/* project stuff */}
        <div className="flex flex-col text-slate-300 text-md text-wrap w-1/2 py-28">
          <header>
            <p className="text-xl">
              some stuff that I've worked on:
            </p>
            <hr className="h-px my-2 bg-slate-500 border-0"/>
          </header>

          <div id="projects" className="mb-5">
            <div className="rounded-md p-2 flex flex-col hover:bg-white/10 mb-5 hover:text-violet-400">
              <a href="https://github.com/bananafiesta/avarian-client" target="_blank" rel="noreferrer">
                <div className="flex flex-row items-center gap-2">
                  <p className="mb-2 font-bold">Avarian</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mb-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <p className="mb-2">Frontend webapp built to manage access to Dockerized backend services for friends, like game server maps, leaderboards, and upkeep information.</p>
                <div className="flex flex-row gap-2 text-violet-200 font-semibold">
                  <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">React</p>
                  <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">Typescript</p>
                  <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">Javascript</p>
                  <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">Tailwind</p>
                </div>
              </a>
            </div>

            <div className="rounded-md p-2 flex flex-col hover:bg-white/10 mb-5 hover:text-violet-400">
              <a href="https://bananafiesta.github.io/fluidsim" target="_blank" rel="noreferrer">
                <div className="flex flex-row items-center gap-2">
                  <p className="mb-2 font-bold">2D Fluid Simulator</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 mb-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

                </div>
                
                <p className="mb-2">2D fluid simulator that simulates the motion and dynamics of fluids according to the Navier-Stokes equations. Allows users to interact with the fluid by moving it around and by drawing walls to impede the fluid.</p>
                <div className="flex flex-row gap-2 text-violet-200 font-semibold">
                  <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">Javascript</p>
                  <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">WebGL</p>
                </div>
              </a>
            </div>
          </div>
          

          <header>
            <p className="text-xl">
              experience:
            </p>
            <hr className="h-px my-2 bg-slate-500 border-0"/>
          </header>

          <div id="experience" className="mb-5">
            <div className="rounded-md p-2 flex flex-col hover:bg-white/10 mb-5 hover:text-violet-400">
            <p className="mb-2 font-bold">Coding Expertise for AI Training, Tier 2· outlier.ai </p>
            <p className="mb-2">I rizz up the AI with my software skills.</p>
            <div className="flex flex-row gap-2 text-violet-200 font-semibold">
              <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">Javascript</p>
              <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">Python</p>
              <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">C</p>
              <p className="bg-violet-500/70 rounded-full px-3 py-0.5 text-sm">C++</p>
            </div>
            </div>
          </div>

          
        </div>
      </div>
      {/* </div> */}
    </body>
  )
}