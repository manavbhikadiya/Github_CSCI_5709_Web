import React from "react";
import "./ProfilePage.css";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state);
  return (
    <div className="container profileContainer">
      <h5>
        {user.firstName} {user.lastName}
      </h5>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfilePage;
