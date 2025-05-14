import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Initializing portfolio environment... />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      if (index === fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 1000);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50  flex flex-col items-center justify-center text-center px-4">
      <div className="mb-4 text-4xl font-mono font-bol text-foreground">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
