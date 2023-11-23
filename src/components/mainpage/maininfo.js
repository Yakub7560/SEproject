import "./maininfo.css";
import React, { useState, useEffect } from "react";
import userData from "../database/data.json";

const PatientList = ({ patients }) => {
  const patientInfo = patients
    .filter((user) => user.usertype === "patient")
    .map((patient) => (
      <div className="patientlist" key={patient.id}>
        <h2>{patient.profile.name}</h2>
        <p>Age: {patient.profile.age}</p>
        <p>Diagnoses: {patient.medical_data.diagnoses.name}</p>
      </div>
    ));

  return <div>{patientInfo}</div>;
};

const Mainpage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // For simplicity, this example uses the first user from the data.json file
    let curUsername = localStorage.getItem("curusername");
    let foundUser = userData.find((u) => u.username === curUsername);

    setUser(foundUser);
  }, []);

  return (
    <div className="about">
      {user && (
        <div>
          {user.usertype === "doctor" ? (
            <div>
              <PatientList patients={userData} />
            </div>
          ) : (
            <div>
              <h2>Main page</h2>
              <div className="mainpage__desc">
                Welcome to EmedSystem, a user-centric web-based patient
                information system revolutionizing healthcare management. As a
                user, your experience begins with a secure login, ensuring only
                authorized access to patient data. Efficiently manage patient
                profiles, updating crucial details and medical history in one
                centralized location.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mainpage;
