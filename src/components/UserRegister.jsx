import React, { useState } from 'react'

const UserRegister = () => {
  const [userData, setUserData] = useState({ email: '', name: '', password: '', gender: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userData)
  }

  return (
    <div className="card">
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder='Email' />
        <br />
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder='Name' />
        <br />
        <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder='Password' />
        <br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <br />
        <p>By clicking Register you agree to our <a href="">terms and conditions</a></p>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default UserRegister