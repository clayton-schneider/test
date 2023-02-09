import { useState } from "react";
import Hamburger from "./Hamburger";

interface Props {
  links: {
    link: string;
    linkText: string;
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <ul
        className={
          "absolute top-[104px] z-50 flex w-full flex-col items-start gap-6 bg-white py-5 px-4 text-lg transition-all duration-300 xs:top-[75px] xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 " +
          (isOpen
            ? "left-0 z-40 !text-black shadow shadow-neutral-300"
            : "-left-full")
        }
      >
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.link}>{link.linkText}</a>
          </li>
        ))}
        <li className="block w-full rounded border-2 border-transparent bg-primary py-6 px-7 text-center leading-none text-white transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary xl:inline xl:w-auto">
          <a href="/request">Request My Free Review</a>
        </li>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
