import { atom } from "jotai";

type UserState = string | undefined;

const userAtom = atom<UserState>(undefined);

export default userAtom;
