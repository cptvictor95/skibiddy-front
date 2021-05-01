import { createContext } from "react";

export interface AuthContext {
  states: { token: string };
  actions: { setToken: string };
}

const AuthCtx = createContext<any>(null);

export default AuthCtx;
