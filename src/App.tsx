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
        <Route path="/profile" element={<AccountInfo />} />
        <Route
          path="/device/add"
          element={
            <HomepageLayout>
              <AddDevice />
            </HomepageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
