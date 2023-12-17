import { atom, selector } from "recoil";

export const loadingAtom = atom({
  key: "loadingAtom",
  default: {
    state: false,
  },
});

export const loadingSelector = selector({
  key: "loadingSelector",
  get: ({ get }) => get(loadingAtom),
  set: ({ set }, state) => set(loadingAtom, { state: state }),
});
