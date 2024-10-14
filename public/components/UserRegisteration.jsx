import React from 'react'

const UserRegisteration = () => {
  const [userData, setUserData] = useState({email: '', name: '', password: '', gender: ''})

  const handleChange = (event) => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(userData)
  }
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" id="" value={userData.email} onChange={handleChange} placeholder='Email' />
        <br />
        <input type="name" name="name" id="" value={userData.email} onChange={handleChange} placeholder='Name' />
        <br />
        <input type="password" name="password" id="" value={userData.email} onChange={handleChange} placeholder='Password' />
        <br />
        <input type="radio" name="gender" id="" value={userData.gender} onSelect={handleChange} />
        <label htmlFor="gender">Male</label>
        <input type="radio" name="gender" id="" value={userData.gender} onSelect={handleChange} />
        <label htmlFor="gender">Female</label>
        <br />
        <p>By clicking Register you agree to our <a href="">terms and conditions</a></p>
        <button type='button'>Register</button>
      </form>
    </div>
  )
}

export default UserRegisteration
