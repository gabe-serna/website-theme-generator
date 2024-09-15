import { SelectedColorType } from "@/ColorProvider";

const updateColorVariables = (colors: SelectedColorType[]) => {
  const labels = [
    "background",
    "foreground",
    "primary",
    "accent",
    "secondary",
    "card"
  ];

  const root = document.documentElement;
  colors.forEach((color, index) => {
    const HSL = hexToHSL(color.color);
    if (index === colors.length - 1 || index === 2) {
      root.style.setProperty(`--${labels[index]}`, HSL);
      root.style.setProperty(`--${labels[index + 1]}`, HSL);
      return;
    }
    root.style.setProperty(`--${labels[index]}`, HSL);
  });
};

export default updateColorVariables;

function hexToHSL(hex: string) {
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result![1], 16);
  let g = parseInt(result![2], 16);
  let b = parseInt(result![3], 16);
  let cssString = "";
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  cssString = h + " " + s + "% " + l + "%";

  return cssString;
}
