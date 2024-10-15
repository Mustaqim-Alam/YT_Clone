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
];

function ButtonListContainer() {
  return (
    <div className="flex overflow-x-hidden w-full">
      {buttonLists.map((buttonName) => (
        <Button name={buttonName} key={buttonName +1 } />
      ))}
    </div>
  );
}

export default ButtonListContainer;
