import { atom, selector } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    user_id: -1,
    email: "",
    name: "",
    phone: "",
    nickname: "",
  },
});

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => get(userAtom),
  set: ({ set, get }, newInfo) => {
    const after = { ...get(userAtom) };
    const tmp = Object.keys(newInfo);
    tmp.forEach((v) => (after[v] = newInfo[v]));
    set(userAtom, after);
  },
});
