import React from 'react'

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div className="mycontainer bg-slate-50">
        <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-500'>&lt;</span>
            Passop
            <span className='text-green-500'>/&gt;</span>
        </h1>
        <p className='text-green-700 text-lg text-center'>Your password manager</p>
      <div className='text-white flex flex-col p-4 text-black gap-4'>
        <input type="text" className='border border-green-500 rounded-full p-4 py-1'/>
        <div className="flex w-full justify-between gap-2">
        <input type="text" className='border w-full border-green-500 rounded-full p-4 py-1'/>
        <input type="text" className='border w-full border-green-500 rounded-full p-4 py-1'/>
        </div>

       <button className='text-black flex justify-center items-center w-fit bg-green-400 rounded-full px-2 py-1 container mx-auto'><lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover"></lord-icon>
        Add password</button>
      </div>
      </div>
    </>
  )
}

export default Manager
