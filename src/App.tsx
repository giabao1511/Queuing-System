import AuthLayout from "@view/Auth/components/AuthLayout";
import ForgotPassword from "@view/Auth/ForgotPassword";
import Login from "@view/Auth/Login/index";
import SetNewPassword from "@view/Auth/SetNewPassword";
import Homepage from "@view/Homepage";
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
      </Routes>
    </div>
  );
}

export default App;
