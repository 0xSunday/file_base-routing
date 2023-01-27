import React from "react";
import { useRouter } from "next/dist/client/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helper/api-utils";

const events = (props) => {
  const events = props.allEvents;
  const router = useRouter();
  const filterSearchEvent = (year, month) => {
    const pathUrl = `/events/${year}/${month}`;
    router.push(pathUrl);
  };
  return (
    <div>
      <EventsSearch onSearch={filterSearchEvent} />
      <EventList items={events} />
    </div>
  );
};

export default events;

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
}
