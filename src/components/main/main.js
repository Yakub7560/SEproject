import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import InfoLayout from "../../InfoLayout";
import Treatment from "../treatment/treatment";
import Diagnosis from "../diagnosis/diagnosis";
import MedicalData from "../medicaldata/medicaldata";
import Profile from "../profile/profile";
import Mainpage from "../mainpage/maininfo";
import NotFound from "./../notfound/Notfound";

const MainInfo = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* {true ? (
        <RouterProvider router={router2} />
      ) : (
        <RouterProvider router={router} />
      )} */}
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<InfoLayout />}>
      <Route index path="maininfo" element={<Mainpage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="medicaldata" element={<MedicalData />} />
      <Route path="diagnosis" element={<Diagnosis />} />
      <Route path="treatment" element={<Treatment />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default MainInfo;
