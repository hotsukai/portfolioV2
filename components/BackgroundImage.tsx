import { useState, useEffect } from "react";

const images = ["images/forest.jpg", "images/bridge.jpg"];

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
    <>
      {images.map((image, i) => (
        <div
          style={{
            height: "95%",
            width: "95%",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("${images[i]}") `,
            backgroundSize: "cover",
            opacity: i === activeImageIndex ? 1 : 0,
            transition: "opacity 1s 0s linear",
          }}
          key={image}
          className="fixed -z-50 overflow-hidden"
        />
      ))}
    </>
  );
};

export default BackGroundImage;
