import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import classes from "./ListItem.module.css";

import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineArrowRight } from "react-icons/ai";

const ListItem = (props) => {
  const { title, image, id, date, location } = props;
  const humanReadable = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <SlCalender className={classes.icon} />
            <time>{humanReadable}</time>
          </div>
          <div className={classes.address}>
            <CiLocationOn className={classes.icon} />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            Explore
            <AiOutlineArrowRight className={classes.icon} />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
