import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

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
    <div className="user-details-container">
      <div className="user-details-card">
        <div className="card-body">
          <h1 className="card-title">User Details</h1>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Date of Birth:</strong> {user.dob}
          </p>
          <p>
            <strong>Designation:</strong> {user.designation}
          </p>
          <p>
            <strong>Comments:</strong> {user.comments}
          </p>
        </div>
      </div>
    </div>
  );
}
