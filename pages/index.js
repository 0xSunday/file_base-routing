import React from "react";
import EventList from "../components/events/EventList";
// import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../dummy-data";

const Home = (props) => {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default Home;
