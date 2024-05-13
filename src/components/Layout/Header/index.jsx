"use client"
import { pages } from "@/navigations/pages";
import "./styles.scss";
import Link from "next/link";
import { Fragment, useState } from "react";
import DrawerMenu from "./DrawerMenu";
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }
  return (
    <Fragment>
      <header>
        <nav>
          <div className="brand">
            <a href="/">Your Logo</a>
          </div>
          <ul className="nav-links">
            {pages.map((item, index) => (
              <li className="active-nav" key={index}>
                <Link href={item?.pagePath}>{item?.pageName}</Link>
              </li>
            ))}
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className="more-button"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </nav>
      </header>
      {/* <DrawerMenu isOpen={openDrawer} toggleDrawer={toggleDrawer}/> */}
    </Fragment>
  );
};

export default Header;
