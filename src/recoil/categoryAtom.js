import { atom, selector } from "recoil";

export const categoryAtom = atom({
  key: "categoryAtom",
  default: {
    main: 0,
  },
});

export const mainSelector = selector({
  key: "mainSelector",
  get: ({ get }) => get(categoryAtom).main,
  set: ({ set, get }, newMain) => {
    const after = { ...get(categoryAtom), main: newMain };
    set(categoryAtom, after);
  },
});
