import { useRef, useEffect, useState } from "react";
import type { data } from "./data.types";

interface Props {
  data: data;
  isOpen: boolean;
  btnOnClick: () => void;
}

export default function AccordianItem({ data, isOpen, btnOnClick }: Props) {
  const { title, content } = data;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`mt-5 ${isOpen ? "" : ""}`}>
      <button
        className={`relative flex w-full cursor-pointer flex-wrap items-center justify-between rounded py-5
        px-10 text-left text-xl font-bold transition-all duration-300
        ${isOpen ? "bg-primary text-white" : "bg-white text-black"}`}
        onClick={btnOnClick}
      >
        <div>{title}</div>
        <span
          className={`flex items-center justify-center self-stretch rounded text-2xl ${
            isOpen ? "text-white" : "text-primary"
          }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <div
        className={
          "h-0 overflow-hidden bg-light-green px-10 text-lg text-black transition-all duration-300 ease-in " +
          (isOpen ? "-mt-2 pt-8 pb-6" : "pt-0")
        }
        // need to add the padding to the height
        style={isOpen ? { height: height + 50 } : { height: 0 }}
      >
        <div ref={contentRef}>{content}</div>
      </div>
    </li>
  );
}
