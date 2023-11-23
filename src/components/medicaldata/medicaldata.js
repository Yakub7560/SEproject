import "./medicaldata.css";
import React, { useState, useEffect } from "react";
import userData from "../database/data.json";

const MedicalData = () => {
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
          <p>Diagnosis: {user.medical_data.diagnoses.name}</p>
          <p>Blood group: {user.medical_data.blood_group}</p>
          <p>Height: {user.medical_data.height}</p>
          <p>Weight: {user.medical_data.weight}</p>
          <p>Allergies: {user.medical_data.allergies}</p>
          <p>Last Visit: {user.medical_data.diagnoses.treatments.last_visit}</p>
        </div>
      )}
    </div>
  );
};

export default MedicalData;
