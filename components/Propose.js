"use client";
import { useState } from "react";
import Image from "next/image";

export default function Propose() {
  const [buttonState, setButtonState] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [scale, setScale] = useState(1); // Add state to track button scale

  const handleClick = (response) => {
    if (response === "yes") {
      setButtonState("yes");
      setScale(1); // Reset scale when "yes" is clicked
    } else if (response === "no") {
      setButtonState("no");
      setClickCount((prev) => prev + 1);
      setScale((prevScale) => Math.max(prevScale * 0.75, 0)); // Decrease scale by 25%
    }
  };

  const getMessage = () => {
    if (buttonState === "yes") {
      return "Yay! I’m so happy!";
    }

    const messages = [
      "Oh come on, give it a thought!",
      "I promise I’m fun to hang out with!",
      "Are you sure? Give it another chance!",
      "Please, just one more try?",
    ];

    return messages[clickCount % messages.length];
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full ${
        buttonState === "yes"
          ? "bg-[url('/assets/images/heart.jpg')]"
          : "bg-gray-100"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center min-w-96">
        <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-1">
          Do you like me
          <Image
            src="/assets/images/heart.jpg"
            alt="Heart"
            width={28}
            height={28}
          />
          ?
        </h1>
        <p className="mb-6 text-lg select-none">{getMessage()}</p>

        <div className="w-full flex items-center justify-center gap-4">
          {buttonState !== "yes" ? (
            <>
              <button
                onClick={() => handleClick("yes")}
                className="transition ease-in px-6 py-2 rounded-full border border-green-500 hover:bg-green-500 hover:text-white bg-white text-green-500 w-24 active:scale-95"
              >
                Yes
              </button>

              <button
                onClick={() => handleClick("no")}
                style={{ transform: `scale(${scale})` }}
                className="transition ease-in-out px-6 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-24 active:scale-95"
              >
                No
              </button>
            </>
          ) : (
            <>
              <Image
                src="/assets/images/heart.jpg"
                alt="Heart"
                width={50}
                height={50}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
