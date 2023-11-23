import React, { useState, useEffect } from "react";
import userData from "../database/data.json";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // For simplicity, this example uses the first user from the data.json file
    let curUsername = localStorage.getItem("curusername");
    let foundUser = userData.find((u) => u.username === curUsername);

    setUser(foundUser);
  }, []);

  return (
    <div>
      {user && (
        <div>
          {user.usertype === "doctor" ? (
            <div>
              <h2>{user.profile.name}</h2>
              <p>Speciality: {user.profile.specialty}</p>
              <p>Contact: {user.profile.contact}</p>
              <p>Hospital: {user.profile.hospital}</p>
              <p>Experience: {user.profile.experience}</p>
              <p>Education: {user.profile.education}</p>
              <p>Certifications: {user.profile.certifications}</p>
            </div>
          ) : (
            <div>
              <h2>{user.profile.name}</h2>
              <p>Age: {user.profile.age}</p>
              <p>Gender: {user.profile.gender}</p>
              <p>Contact: {user.profile.contact}</p>
              <p>Address: {user.profile.address}</p>
              <p>Education: {user.profile.education}</p>
              <p>Certifications: {user.profile.certifications}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
