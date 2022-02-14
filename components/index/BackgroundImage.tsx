import classNames from "classnames";
import Image from "next/image";
import { useState, useEffect } from "react";
const images = ["/images/forest.jpg", "/images/bridge.jpg"] as const;

const BackGroundImage = () => {
  const [count, setCount] = useState(0);
  const activeImageIndex = count % images.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed -z-50 w-full h-full bg-slate-600">
      {images.map((image, i) => (
        <Image
          layout="fill"
          objectFit="cover"
          priority={i === 0}
          src={images[i]}
          alt="背景画像"
          key={image}
          className={classNames(
            "overflow-hidden transition-opacity ease-linear duration-2000",
            i === activeImageIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
};

export default BackGroundImage;
