import React from "react";
import ListItem from "./ListItem";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <ListItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
