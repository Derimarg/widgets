const imageInfo = [
  {
    key: 1,
    url: `${require("./../../assets/img/img-1.jpeg")}`,
    alt: "Slide one",
    num: "1 / 3",
    desc: "Caption image 1",
  },
  {
    key: 2,
    url: `${require("./../../assets/img/img-2.jpeg")}`,
    alt: "Slide two",
    num: "2 / 3",
    dmgDesc: "Caption image 2",
  },
  {
    key: 3,
    url: `${require("./../../assets/img/img-3.jpeg")}`,
    alt: "Slide three",
    num: "3 / 3",
    desc: "Caption image 3",
  },
];

const dotInfo = imageInfo.map(img => ({
    num: img.key
}));

export { imageInfo, dotInfo };
