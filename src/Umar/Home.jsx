import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";

const Home = () => {
  const { users, setUsers } = useUserContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    age: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]); // Add the new user data
    setFormData({ name: "", email: "", address: "", phone: "", age: "" }); // Reset form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <button type="submit">Add User</button>
      </form>

      {/* Display the table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>
                <Link to="/user-details" state={{ user }}>See More</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;