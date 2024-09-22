import React, { useEffect, useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";

const Manager = () => {
  const inputRef = useRef(null);

  const [form,setForm] = useState({site: "", username: "", password: ""});
  const [passwordArray,setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if(passwords) setPasswordArray(JSON.parse(passwords))
  },[])

  const togglePass = (e) => {
    if (inputRef.current) {
      // Check current type and toggle
      const currentType = inputRef.current.type;
      const newType = currentType === "password" ? "text" : "password";
      inputRef.current.type = newType;
    }
  }

  const addPass = () => {
    setPasswordArray([...passwordArray,form]);
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]));
    console.log(passwordArray)
  }

  const handleChange = (e) => {
    setForm({...form,[e.target.name] : e.target.value});
  }
  
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div className="mycontainer bg-custom-yellow-gradient">
        <h1 className='text-4xl font-bold text-center'> 
        <span className='text-green-500'>&lt;</span>
            Passop
            <span className='text-green-500'>/&gt;</span>
        </h1>
        <p className='text-green-700 text-lg text-center'>Your password manager</p>
      <div className='flex flex-col p-4 text-black gap-4'>
        <input type="text" name="site" value={form.site} onChange={handleChange} placeholder='Enter website URL' className='border border-green-500 rounded-full p-4 py-1'/>
        <div className="flex w-full justify-between gap-2 text-black">
        <input placeholder='Enter Username' name="username" onChange={handleChange} value={form.username} type="text" className='border w-full border-green-500 rounded-full p-4 py-1'/>
       
        <div className="relative w-fit">
        <input placeholder='Enter Password' ref={inputRef} name="password" onChange={handleChange} value={form.password} type="password" className='border w-full border-green-500 rounded-full p-4 py-1'/>
        <span onClick={togglePass} className='absolute right-0 text-black my-2 mx-2'><FaEye /></span>
        </div>
        </div>

       <button onClick={addPass} className='text-black flex justify-center items-center w-fit bg-green-600 rounded-full px-2 py-1 container mx-auto hover:bg-green-500'><lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover"></lord-icon>
        Add password</button>
      </div>
      <div className="passwords">
        <h2 className='text-2xl font-bold'>Your passwords</h2>
        {passwordArray.length === 0 && <div>No passwords to show</div>}
        {passwordArray.length > 0 && 
        <table class="table-auto w-full">
  <thead className='bg-gray-800 text-white'>
    <tr>
      <th>Site</th>
      <th >Username</ th>
      <th >Password</th> 
    </tr> 
  </thead>
  <tbody className='bg-green-200 font-mono'>
    {passwordArray.map((item,index) => {
      return(
        <tr key={index}>
        <td className='text-center w-40 border py-2 border-lime-600'><a href={item.site} target='_blank'>{item.site}</a></td>
        <td className='text-center w-40 border py-2 border-lime-600'>{item.username}</td>
        <td className='text-center w-40 border py-2 border-lime-600'>{item.password}</td>
      </tr>
      )
    })}

  </tbody>
</table>}
      </div>
      </div>
    </>
  )
}

export default Manager
