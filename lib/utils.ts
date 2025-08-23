import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadingTime(content: string) {
  const WPS = 250 / 60;
  let images = 0;
  const regex = /\w/;

  const word = content.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  const imageAdjust = images * 4;
  let imageSecs = 0;
  let imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((word - imageAdjust) / WPS + imageSecs) / 60);

  if (minutes < 9) {
    return "0" + minutes;
  } else {
    return minutes;
  }
}
