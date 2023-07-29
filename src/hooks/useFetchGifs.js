import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImgs = await getGifs(category);
    setImages(newImgs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, );

  return {
    images: images,
    isLoading
  };
};
