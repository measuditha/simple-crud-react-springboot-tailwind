import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUsers = () => {

  const navigate =useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  })

  const { name, username, email } = user

  const onInputChange = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value }) 
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  }
  

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <form onSubmit={(e)=>onSubmit(e)}>
            <h1 className="mb-8 text-3xl text-center">Add User</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => onInputChange(e)} />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onInputChange(e)} />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="User Name"
              value={username}
              onChange={(e) => onInputChange(e)} />
            <button type="submit" className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1">
              Create Account
            </button>
            <Link type="submit" className="w-full text-center py-3 rounded bg-red-500 text-white hover:bg-red-800 focus:outline-none my-1" to="/">
              Cancell
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUsers