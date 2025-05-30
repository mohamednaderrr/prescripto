import React, { useState } from 'react'

const Login = () => {

  const [state , setState] = useState('Sign Up')

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')

  const onSubmitHandler = async (event) =>{
    event.preventDefault()


  }


  return (
    <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
          <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
          {
            state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required/>
            </div>
          }
          

          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.email)} value={email} required/>
          </div>

          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.password)} value={password} required/>
          </div>

          <button className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-primary/50 hover:scale-105 transition-all duration-300' type='submit'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
          {
            state === "Sign Up" 
            ? <p>Already Have an Account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Login')}>Login Here</span></p>
            : <p>Create an Account? <span className='text-primary underline cursor-pointer' onClick={() => setState('Sign Up')}>Click Here</span></p>
          }
        </div>
    </form>
  )
}

export default Login