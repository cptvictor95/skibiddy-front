import { createContext } from "react";

export interface AuthContext {
  states: { token: string | null };
  actions: { setToken: string | null };
}

const AuthCtx = createContext<any>(null);

export default AuthCtx;
