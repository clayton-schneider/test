import { useState } from "react";
import Hamburger from "./Hamburger";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
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
          (isOpen ? "left-0 z-40 !text-black shadow" : "-left-full")
        }
      >
        {links.map((link, idx) => {
          if (link.sublinks) {
            return (
              <li key={idx} className="group relative">
                <a href={link.link}>{link.linkText}</a>
                <ul className="z-50 w-full pt-1 pl-5 text-center text-black lg:absolute lg:left-1/2 lg:hidden lg:w-[200px] lg:-translate-x-1/2 lg:pl-0  lg:shadow lg:group-hover:block">
                  {link.sublinks.map((sublink, idx) => (
                    <li
                      key={idx}
                      className="first:rounded-t last:rounded-b hover:text-white lg:bg-white lg:hover:bg-primary"
                    >
                      <a className="block py-2 px-4" href={sublink.link}>
                        {sublink.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <a href={link.link}>{link.linkText}</a>
              </li>
            );
          }
        })}
        <li className="block w-full rounded border-2 border-transparent bg-primary py-6 px-7 text-center leading-none text-white transition-all duration-300 hover:border-primary hover:bg-transparent hover:text-primary xl:inline xl:w-auto">
          <a href="/request">Request My Free Review</a>
        </li>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
