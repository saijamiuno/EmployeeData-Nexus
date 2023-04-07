import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css"

export default function UserDetails(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/getUserDetails/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Phone Number: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Date Of Birth: {user.dob}</p>
      <p>Designation: {user.designation}</p>
      <p>Comments: {user.comments}</p>
    </div>
  );
}
