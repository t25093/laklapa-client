import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types";
import { getMe } from "../api/auth";
import { loadJson, saveJson, removeKey } from "../utils/storage";

const TOKEN_KEY = "laklapa_token";

interface AuthContextValue {
  user: User | null;
  token: string | null;
  initializing: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    loadJson<string | null>(TOKEN_KEY, null)
  );
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(() =>
    loadJson<string | null>(TOKEN_KEY, null) !== null
  );

  function login(newToken: string, newUser: User) {
    setToken(newToken);
    setUser(newUser);
    saveJson(TOKEN_KEY, newToken);
  }

  function logout() {
    setToken(null);
    setUser(null);
    removeKey(TOKEN_KEY);
  }

  useEffect(() => {
    if (!token) return;
    getMe(token)
      .then((me) => setUser(me))
      .catch(() => logout())
      .finally(() => setInitializing(false));
    // רץ פעם אחת בלבד, בטעינת האתר
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, initializing, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth חייב להיות בתוך AuthProvider");
  }
  return context;
}