import React, { useState, useEffect } from "react";
import userData from "../database/data.json";

const Treatment = () => {
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
          {user.usertype === "patient" ? (
            <div>
              <p>Name: {user.medical_data.diagnoses.treatments.drname}</p>
              <p>Dosage: {user.medical_data.diagnoses.treatments.dosage}</p>
              <p>
                Frequency: {user.medical_data.diagnoses.treatments.frequency}
              </p>
              <p>Duration: {user.medical_data.diagnoses.treatments.duration}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Treatment;
