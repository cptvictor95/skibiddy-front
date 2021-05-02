import { createContext } from "react";
// import { Song } from "../interface/Song";

// export interface SongContext {
//   songStates: { songs: Song[] };
//   songActions: { getSongs(): Promise<void> };
// }

const SongCtx = createContext<any>(null);

export default SongCtx;
