import Link from "next/link";
import React from "react";

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
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>{humanReadable}</div>
          <div>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
