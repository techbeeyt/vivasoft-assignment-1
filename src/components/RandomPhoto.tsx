import { useEffect, useState } from "react";
import FancyHeader from "./FancyHeader";

const RandomPhoto = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setPhotos(data);
    setIsLoaded(true);
  };
  useEffect(() => {
    loadPhotos();
  }, []);
  return (
    <div className="p-20">
      <FancyHeader text="RANDOM PHOTOS" />

      {isLoaded ? (
        <div className="grid grid-cols-3 gap-6 mt-4">
          {photos.slice(0, 9).map((item: any, index) => {
            console.log(item);
            return (
              <div key={`$hi_${index}`}>
                <div>
                  <img src={item.url} className="rounded" />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 mt-4">
          {Array.from({ length: 9 }).map((_, index) => {
            return (
              <div key={`$hi_${index}`}>
                <div className="w-full pb-[94%] bg-gray-200 animate-pulse duration-75"></div>
                <div className="w-[60%] mt-2 h-5 rounded-full bg-gray-200 animate-pulse"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RandomPhoto;
