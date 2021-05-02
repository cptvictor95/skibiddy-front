import { createContext } from "react";

// export interface AuthContext {
//   authStates: { token: string };
//   authActions: { setToken: string };
// }

const AuthCtx = createContext<any>(null);

export default AuthCtx;
