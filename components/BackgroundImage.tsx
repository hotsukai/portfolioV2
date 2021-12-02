import { useState, useEffect } from "react";

const images = ["images/forest.jpg", "images/bridge.jpg"];
const BackGroundImage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("${
          images[count % images.length]
        }") `,
        backgroundSize: "cover",
        zIndex: -1,
        position: "fixed",
      }}
    ></div>
  );
};

export default BackGroundImage;
