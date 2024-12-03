import React from "react";
// import image
import image1 from "../images/image1.webp";
function DisplayImages() {
  return (
    <div>
      <img src={image1} alt="my_pic here" />
      {/* when images are stored in public folder, we need not import it */}
      <img src="./image1.webp" alt="image using public folder" />
    </div>
  );
}

export default DisplayImages;
