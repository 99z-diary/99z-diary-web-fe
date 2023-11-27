import { atom } from "recoil";

export const scheduleAtom = atom({
  key: "scheduleAtom",
  default: [
    {
      type: 0,
      title: "우리 아빠",
      place: "지구별",
      when: new Date("2023-12-31T15:30:00"),
      howlong: "60분",
      howMany: 4,
    },
    {
      type: 1,
      title: "송년회",
      place: "어딘가",
      when: new Date("2023-12-31T18:00:00"),
      where: "중앙무대",
      howMany: 9,
    },
    {
      type: 0,
      title: "우리 아빠",
      place: "지구별",
      when: new Date("2023-12-31T15:30:00"),
      howlong: "60분",
      howMany: 4,
    },
    {
      type: 1,
      title: "송년회",
      place: "어딘가",
      when: new Date("2023-12-31T18:00:00"),
      where: "중앙무대",
      howMany: 9,
    },
  ],
});
