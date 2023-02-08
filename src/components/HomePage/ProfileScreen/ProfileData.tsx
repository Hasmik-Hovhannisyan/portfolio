import product1 from "./product/product1.png";
import product2 from "./product/product2.png";
import product3 from "./product/product3.png";
import product4 from "./product/product4.png";

export default interface ProfileDatainterFace {
  id: number;
  url: string;
  name: string;
  discribtion: string;
  price: string;
  quantity?: 0;
}

export const profileData = [
  {
    id: 1,
    url: product1,
    name: "Superstar Shoe",
    discribtion: "Women's Originals",
    price: 100,
  },
  {
    id: 2,
    url: product2,
    name: "Adistar Running Shoe",
    discribtion: "Women's Running",
    price: 65,
  },
  {
    id: 3,
    url: product3,
    name: "Forum Low W",
    discribtion: "Women's Originals",
    price: 80,
  },
  {
    id: 4,
    url: product4,
    name: "Grand Court Cloudfoam Lifestyle Court",
    discribtion: "Comfort Shoe",
    price: 70,
  },
  {
    id: 5,
    url: product2,
    name: "Adzero Boston 11 Running Shoe",
    discribtion: "Women's Running",
    price: 160,
  },
  {
    id: 6,
    url: product3,
    name: "Court Platform CLN Shoe",
    discribtion: "Women's Essentials",
    price: 39,
  },
  {
    id: 7,
    url: product4,
    name: "NMD_R1 Shoe",
    discribtion: "Women's Originals",
    price: 170,
  },
  {
    id: 8,
    url: product1,
    name: "NMD_V3 Shoe",
    discribtion: "Comfort Shoe",
    price: 119,
  },
];
