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
          "absolute top-[104px] z-50 flex w-full flex-col items-start gap-6 bg-white py-5 px-4 text-lg transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 xs:top-[75px] " +
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
        <li className="block w-full rounded border border-white bg-primary py-2 px-4 text-center font-bold text-white xl:inline xl:w-auto">
          <a href="/apply">Apply Now</a>
        </li>
        <li className="block w-full rounded border border-primary bg-white py-2 px-4 text-center font-bold text-primary xl:inline xl:w-auto">
          <a href="/donate">Donate</a>
        </li>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
