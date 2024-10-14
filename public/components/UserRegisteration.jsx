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
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" id="" value={userData.email} onChange={handleChange} placeholder='Email' />
        <br />
        <input type="name" name="name" id="" value={userData.email} onChange={handleChange} placeholder='Name' />
        <br />
        <input type="password" name="password" id="" value={userData.email} onChange={handleChange} placeholder='Password' />
        <br />
        <input type="radio" name="gender" id="" />
        <label htmlFor="gender">Male</label>
        <input type="radio" name="gender" id="" />
        <label htmlFor="gender">Female</label>
      </form>
    </div>
  )
}

export default UserRegisteration
