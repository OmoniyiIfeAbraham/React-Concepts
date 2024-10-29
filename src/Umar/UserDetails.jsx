import React from "react";
import { useLocation, Link } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h2>{user.name}'s Details</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>Age: {user.age}</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default UserDetails;