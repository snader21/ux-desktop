import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, confirmPassword: string) => void;
}

// Default context values
const defaultAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  login: () => false,
  register: () => {},
};

const FakeAuthContext = createContext<AuthContextType>(defaultAuthContext);

function FakeAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email: string, password: string) {
    if (user && email === user.email && password === user.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }

  function register(email: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const newUser: User = { email, password };
    setUser(newUser);
    console.log("User registered successfully");
  }

  return (
    <FakeAuthContext.Provider
      value={{ user, isAuthenticated, login, register }}
    >
      {children}
    </FakeAuthContext.Provider>
  );
}

// Custom hook to use context
function useFakeAuth() {
  const context = useContext(FakeAuthContext);
  if (!context) {
    throw new Error("useFakeAuth must be used within a FakeAuthProvider");
  }
  return context;
}

export { FakeAuthProvider, useFakeAuth };
