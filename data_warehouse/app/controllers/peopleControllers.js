import {
  getPersonById,
  logPeople,
  insertPerson,
  updatePersonById,
  deletePersonById,
} from '../services/peopleServices.js';

export const handlePeopleRequest = async () => {
  try {
    const people = await logPeople();
    // Convert the result to JSON
    const peopleJson = JSON.stringify(people);

    // Return the result as a JSON string
    return new Response(peopleJson, {
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

export const handlePersonByIdRequest = async (personId) => {
  // Check if the personId is a non-empty string
  if (typeof personId !== 'string' || personId.trim().length === 0) {
    return new Response('Invalid Person ID', { status: 400 });
  }

  try {
    const person = await getPersonById(personId);
    if (person) {
      // If the person is found, return it as JSON response
      return new Response(JSON.stringify(person), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // If the person is not found, return a 404 response
      return new Response('Person not found', { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching people:', error);
    // Return a more specific error response
    return new Response('Error fetching person from the database', {
      status: 500,
    });
  }
};

export const handleAddPersonRequest = async (request) => {
  // curl -X POST -H "Content-Type: application/json" -d '{
  //   "person_id": "123",
  //   "name": "John Doe",
  //   "phone_number": "123-456-7890",
  //   "company_id": "abc.com"
  // }' http://localhost:7777/people

  try {
    const body = await request.json(); // Assuming the data sent is in JSON format
    // Validate the data in the body, making sure it contains all required fields

    // Insert the new company into the database
    const newPersonId = await insertPerson(body);

    // Return the newly created company ID as a response
    return new Response(JSON.stringify({ person_id: newPersonId }), {
      status: 201, // 201 Created status code for successful creation
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding person:', error);
    return new Response('Error adding person to the database', {
      status: 500,
    });
  }
};

export const handleUpdatePersonRequest = async (request) => {
  // curl -X PATCH -H "Content-Type: application/json" -d '{
  //   "name": "Jane Doe",
  //   "phone_number": "123-456-7890",
  //   "company_id": "xyz.com"
  // }' http://localhost:7777/people/123
  try {
    const body = await request.json(); // Assuming the data sent is in JSON format

    // Validate the body fields
    if (!body.name || !body.phone_number || !body.company_id) {
      return new Response('Invalid request data', {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract person id from request URL
    const url = new URL(request.url);
    const paths = url.pathname.split('/');
    const personId = paths[paths.length - 1];

    // Update the person in the database
    const updatedPersonId = await updatePersonById(personId, body);

    // Return the updated person ID as a response
    return new Response(JSON.stringify({ person_id: updatedPersonId }), {
      status: 200, // 200 OK status code for successful update
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating person:', error);
    return new Response('Error updating person in the database', {
      status: 500,
    });
  }
};

export const handleDeletePersonRequest = async (request) => {
  // curl -X DELETE http://localhost:7777/people/{personId}

  try {
    const url = new URL(request.url);
    const paths = url.pathname.split('/');
    const personId = paths[paths.length - 1];

    const deletedPersonId = await deletePersonById(personId);

    return new Response(JSON.stringify({ person_id: deletedPersonId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting person:', error);
    return new Response('Error deleting person from the database', {
      status: 500,
    });
  }
};
