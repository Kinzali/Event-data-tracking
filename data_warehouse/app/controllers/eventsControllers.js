import {
  logEvents,
  getEventById,
  insertEvent,
} from '../services/eventsServices.js';

export const handleEventsRequest = async () => {
  try {
    const events = await logEvents();
    // Convert the result to JSON
    const eventsJson = JSON.stringify(events);

    // Return the result as a JSON string
    return new Response(eventsJson, {
      headers: { 'Content-Type': 'application/json' },
      status: 200, // OK status
    });
  } catch (error) {
    console.error('Error fetching events:', error);

    return new Response(
      JSON.stringify({
        message: 'Error in the GET request, possibly faulty or malformed',
      }),
      {
        status: 400, // Bad Request status
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export const handleEventByIdRequest = async (eventId) => {
  // Parse eventId to integer and check if it's a valid integer
  const parsedEventId = parseInt(eventId);
  if (isNaN(parsedEventId)) {
    return new Response('Invalid Event ID', { status: 400 });
  }

  try {
    const event = await getEventById(parsedEventId);
    if (event) {
      // If the event is found, return it as JSON response
      return new Response(JSON.stringify(event), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // If the event is not found, return a 404 response
      return new Response('Event not found', { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching event:', error);
    // Return a more specific error response
    return new Response('Error fetching event from the database', {
      status: 500,
    });
  }
};

export const handleAddEventRequest = async (request) => {
  try {
    const body = await request.json(); // Assuming the data sent is in JSON format
    // Validate the data in the body, making sure it contains all required fields
    // TODO nedd to check why curl post request is not working
    // curl -X POST -H "Content-Type: application/json" -d '{
    //   "person_id": "123",
    //   "type": "registration",
    //   "timestamp": "2023-07-25T12:34:56.000Z",
    //   "url": "https://example.com/event"
    // }' http://localhost:7777/events

    // Validate the data in the body, making sure it contains all required fields
    if (!body.person_id || !body.type || !body.timestamp || !body.url) {
      return new Response('Invalid request data', {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Insert the new event into the database
    const newEventId = await insertEvent(body);

    // Return the newly created event ID as a response
    return new Response(JSON.stringify({ event_id: newEventId }), {
      status: 201, // 201 Created status code for successful creation
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding event:', error);
    return new Response('Error adding event to the database', {
      status: 500,
    });
  }
};
