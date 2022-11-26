import LogisticsItem from "./logistics-item";

import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={SlCalender}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={CiLocationOn}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
