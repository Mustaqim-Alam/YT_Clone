import React from "react";
import Button from "./Button";

const buttonLists = [
  "All",
  "Gaming",
  "Cartoon",
  "Live",
  "Cricket",
  "News",
  "Pranks",
  "Shop",
  "Recipe",
  "Music",
  "Podcast",
  "Slideshow",
  "kitchen",
  "Shopping",
];

function ButtonListContainer() {
  return (
    <div className="flex">
      {buttonLists.map((buttonName) => (
        <Button name={buttonName} key={buttonName +1 } />
      ))}
    </div>
  );
}

export default ButtonListContainer;
