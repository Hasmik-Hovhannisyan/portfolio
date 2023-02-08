import hero from "./../../images/SliderImages/hero.jpg";
import addidas from "./../../images/SliderImages/addidas.jpg";
import puma from "./../../images/SliderImages/puma.jpg";

export default interface SliderDatainterFace {
  id: number;
  url: string;
}

export const sliderData = [
  { id: 1, url: hero },
  { id: 2, url: addidas },
  { id: 3, url: puma },
];
