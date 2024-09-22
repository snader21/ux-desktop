import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import AppLayout from "./pages/AppLayout/AppLayout";
import AlarmList from "./pages/Alarms/AlarmList";
import Phrases from "./pages/Phrases/Phrases";
import Register from "./pages/Register/Register";
import RegisterAll from "./pages/RegisterAll/RegisterAll";
import { FakeAuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <FakeAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerall" element={<RegisterAll/>} />
          <Route path="alarms" element={<AlarmList/>} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AlarmList />} />
            <Route path="phrases" element={<Phrases />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FakeAuthProvider>
  );
}

export default App;
