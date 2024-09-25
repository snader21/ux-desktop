import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import AppLayout from "./pages/AppLayout/AppLayout";
import AlarmList from "./pages/Alarms/AlarmList";
import Phrases from "./pages/Phrases/Phrases";
import Register from "./pages/Register/Register";
import RegisterAll from "./pages/RegisterAll/RegisterAll";
import { FakeAuthProvider } from "./contexts/FakeAuthContext";
import { PhrasesProvider } from "./contexts/PhrasesContext";
import { ModalProvider } from "./providers/ModalProvider/ModalProvider";
import { ToastProvider } from "./providers/ToastProvider/ToastProvider";

function App() {
  return (
    <FakeAuthProvider>
      <ToastProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="auth-providers" element={<RegisterAll />} />
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
                <Route index element={<AlarmList />} />
                <Route path="alarms" element={<AlarmList />} />
                <Route
                  path="phrases"
                  element={
                    <PhrasesProvider>
                      <Phrases />
                    </PhrasesProvider>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </ToastProvider>
    </FakeAuthProvider>
  );
}

export default App;
