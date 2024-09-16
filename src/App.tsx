import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import AppLayout from "./pages/AppLayout/AppLayout";
import Alarms from "./pages/Alarms/Alarms";
import Phrases from "./pages/Phrases/Phrases";
import Register from "./pages/Register/Register";
import { FakeAuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <FakeAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Alarms />} />
            <Route path="phrases" element={<Phrases />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FakeAuthProvider>
  );
}

export default App;
