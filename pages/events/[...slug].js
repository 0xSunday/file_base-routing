import React, { Fragment } from "react";
import { useRouter } from "next/router";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";
const slug = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
 
  if (!filteredData) {
    return <h2 className="center">loading, please wait.....</h2>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2023 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    <Fragment>
      <ErrorAlert>
        <h1>invalid input, please enter valid input</h1>
      </ErrorAlert>

      <div className="center">
        <Button link="/events">Slow All Events</Button>
      </div>
    </Fragment>;

    return;
  }

  const filtedEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filtedEvents || filtedEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <h1>No events found in chosen filter</h1>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Slow All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return ( 
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filtedEvents} />
    </Fragment>
  );
};

export default slug;
