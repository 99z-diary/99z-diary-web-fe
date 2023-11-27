import { atom } from "recoil";

export const postAtom = atom({
  key: "postAtom",
  default: [
    {
      thumbnail: "",
      images: [],
      updated: new Date("2023-12-31"),
      contents:
        "description1 description1 description1 description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1",
    },
    {
      thumbnail: "",
      images: [],
      updated: new Date("2023-12-31"),
      contents:
        "description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1",
    },
    {
      thumbnail: "",
      images: [],
      updated: new Date("2023-12-31"),
      contents:
        "description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1",
    },
  ],
});
