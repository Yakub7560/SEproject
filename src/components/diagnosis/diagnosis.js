import React, { useState, useEffect } from "react";
import userData from "../database/data.json";

const Diagnosis = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // For simplicity, this example uses the first user from the data.json file
    let curUsername = localStorage.getItem("curusername");
    let foundUser = userData.find((u) => u.username === curUsername);

    setUser(foundUser);
  }, []);

  return (
    <div>
      {user && user.usertype === "patient" && (
        <div>
          <p>Diagnosis: {user.medical_data.diagnoses.name}</p>
          <p>Date of Diagnosis: {user.medical_data.diagnoses.date}</p>
          <p>Last Visit: {user.medical_data.diagnoses.last_visit}</p>
        </div>
      )}
    </div>
  );
};

export default Diagnosis;
