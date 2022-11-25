import "./firebase/config";
import AuthLayout from "@view/Auth/components/AuthLayout";
import ForgotPassword from "@view/Auth/ForgotPassword";
import Login from "@view/Auth/Login/index";
import SetNewPassword from "@view/Auth/SetNewPassword";
import Homepage from "@view/Homepage";
import AccountInfo from "@view/Homepage/components/AccountInfo";
import HomepageLayout from "@view/Homepage/components/HomepageLayout";
import Dashboard from "@view/Homepage/Dashboard";
import Device from "@view/Homepage/Device";
import AddDevice from "@view/Homepage/Device/AddDevice";
import { Route, Routes } from "react-router-dom";
import DetailDevice from "@view/Homepage/Device/DetailDevice";
import UpdateDevice from "@view/Homepage/Device/UpdateDevice";
import Service from "@view/Homepage/components/Service";
import AddService from "@view/Homepage/components/Service/AddService";
import DetailService from "@view/Homepage/components/Service/DetailService";
import UpdateSevice from "@view/Homepage/components/Service/UpdateSevice";
import Provide from "@view/Homepage/components/Provide";
import AddProvide from "@view/Homepage/components/Provide/AddProvide";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/new-password"
          element={
            <AuthLayout>
              <SetNewPassword />
            </AuthLayout>
          }
        />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/info"
          element={
            <HomepageLayout>
              <AccountInfo />
            </HomepageLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <HomepageLayout>
              <Dashboard />
            </HomepageLayout>
          }
        />
        <Route
          path="/device"
          element={
            <HomepageLayout>
              <Device />
            </HomepageLayout>
          }
        />
        <Route
          path="/service"
          element={
            <HomepageLayout>
              <Service />
            </HomepageLayout>
          }
        />
        <Route
          path="/service/detail/:id"
          element={
            <HomepageLayout>
              <DetailService />
            </HomepageLayout>
          }
        />
        <Route
          path="/service/update/:id"
          element={
            <HomepageLayout>
              <UpdateSevice />
            </HomepageLayout>
          }
        />
        <Route
          path="/service/add"
          element={
            <HomepageLayout>
              <AddService />
            </HomepageLayout>
          }
        />
        <Route
          path="/provide"
          element={
            <HomepageLayout>
              <Provide />
            </HomepageLayout>
          }
        />
        <Route
          path="/provide/detail/:id"
          element={
            <HomepageLayout>
              <DetailService />
            </HomepageLayout>
          }
        />
        <Route
          path="/provide/add"
          element={
            <HomepageLayout>
              <AddProvide />
            </HomepageLayout>
          }
        />
        <Route path="/profile" element={<AccountInfo />} />
        <Route
          path="/device/add"
          element={
            <HomepageLayout>
              <AddDevice />
            </HomepageLayout>
          }
        />
        <Route
          path="/device/detail/:id"
          element={
            <HomepageLayout>
              <DetailDevice />
            </HomepageLayout>
          }
        />

        <Route
          path="/device/update/:id"
          element={
            <HomepageLayout>
              <UpdateDevice />
            </HomepageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
