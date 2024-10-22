import React, { useState } from "react";
import './FormWIthModalStyle.css';

const FormWithModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    age: ""
  });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      age: ""
    });
  };

  // Open modal with user details
  const handleSeeMore = (user) => {
    setSelectedUser(user);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>User List</h2>
      <table border="1">
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
                <button onClick={() => handleSeeMore(user)}>See More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>User Details</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Age:</strong> {selectedUser.age}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormWithModal;