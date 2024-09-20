import React from 'react'
//test

const Navbar = () => {
  return (
    <nav className='bg-slate-800'>
        <div className="mycontainer text-white flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl hover:text-cyan-400">
            <span className='text-green-500'>&lt;</span>
            Passop
            <span className='text-green-500'>/&gt;</span>
        </div>
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href='/'>Home</a>
                <a className='hover:font-bold' href='#'>About</a>
                <a className='hover:font-bold' href='#'>Contact</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
