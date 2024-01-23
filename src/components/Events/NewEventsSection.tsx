import { useEffect, useState } from 'react';
import { errorType, eventType } from '../../types.ts';

import LoadingIndicator from '../UI/LoadingIndicator.tsx';
import ErrorBlock from '../UI/ErrorBlock.tsx';
import EventItem from './EventItem.tsx';

export default function NewEventsSection() {
  const [data, setData] = useState<eventType[]>();
  const [error, setError] = useState({ code: null, info: null });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/events');

      if (!response.ok) {
        const error = new Error(
          'An error occurred while fetching the events'
        ) as errorType;

        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const { events } = await response.json();

      return events;
    }

    fetchEvents()
      .then(events => {
        setData(events);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = (
      <ErrorBlock title="An error occurred" message="Failed to fetch events" />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map(event => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
