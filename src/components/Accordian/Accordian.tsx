import { useState } from "react";
import { data } from "./data.types";
import AccordianItem from "./AccordianItem";

// Based On https://dominicarrojado.com/posts/how-to-create-your-own-accordion-in-react-and-typescript-with-tests/

interface Props {
  items: data[];
}
export default function Accordian({ items }: Props) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((curVal) => (curVal !== idx ? idx : -1));
  };

  return (
    <ul className="my-0 mx-auto">
      {items.map((item, idx) => (
        <AccordianItem
          key={idx}
          data={item}
          btnOnClick={() => btnOnClick(idx)}
          isOpen={idx === currentIdx}
        />
      ))}
    </ul>
  );
}
