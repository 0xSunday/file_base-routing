import React from "react";
import Link from "next/dist/client/link";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvent</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">browese all events</Link>i
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
