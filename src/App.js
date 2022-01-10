import "./styles.css";
import { useState } from "react";

const arr = [
  "https://picsum.photos/400/200?random=1",
  "https://picsum.photos/400/200?random=2",
  "https://picsum.photos/400/200?random=3"
];

export default function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(arr[0]);

  const handleImageNavigation = (nav) => {
    if (nav === "right") {
      setCount(count + 1);
      setImage(arr[count + 1]);
    } else {
      setCount(count - 1);
      setImage(arr[count - 1]);
    }
  };

  return (
    <div className="main">
      {/* <div
        style={{ backgroundColor: "red", width: "200px", height: "200px" }}
      ></div> */}
      <img src={image} alt="dummy" width="100" height="100"></img>
      <button onClick={() => handleImageNavigation("left")}>left</button>
      <button onClick={() => handleImageNavigation("right")}>right</button>
    </div>
  );
}
