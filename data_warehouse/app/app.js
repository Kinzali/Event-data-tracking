import { serve } from './deps.js';
import {
  handleEventsRequest,
  handleEventByIdRequest,
  handleAddEventRequest,
} from './controllers/eventsControllers.js';
import {
  handleCompanyByIdRequest,
  handleCompaniesRequest,
  handleAddCompanyRequest,
  handleUpdateCompanyRequest,
  handleDeleteCompanyRequest,
} from './controllers/companiesControllers.js';
import {
  handlePersonByIdRequest,
  handlePeopleRequest,
  handleAddPersonRequest,
  handleUpdatePersonRequest,
  handleDeletePersonRequest,
} from './controllers/peopleControllers.js';

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (request.method === 'GET' && url.pathname === '/events') {
    return handleEventsRequest();
  } else if (request.method === 'GET' && url.pathname === '/companies') {
    return handleCompaniesRequest();
  } else if (request.method === 'GET' && url.pathname === '/people') {
    return handlePeopleRequest();
  } else if (request.method === 'GET' && url.pathname.startsWith('/events/')) {
    const eventId = url.pathname.substring(8);
    if (!eventId) {
      return new Response('Event ID not provided', { status: 400 });
    }
    return handleEventByIdRequest(eventId);
  } else if (
    request.method === 'GET' &&
    url.pathname.startsWith('/companies/')
  ) {
    const companyId = url.pathname.substring(11);
    if (!companyId) {
      return new Response('Company ID not provided', { status: 400 });
    }
    return handleCompanyByIdRequest(companyId);
  } else if (request.method === 'GET' && url.pathname.startsWith('/people/')) {
    const personId = url.pathname.substring(8);
    if (!personId) {
      return new Response('Person ID not provided', { status: 400 });
    }
    return handlePersonByIdRequest(personId);
  } else if (request.method === 'POST' && url.pathname === '/events') {
    return handleAddEventRequest(request);
  } else if (request.method === 'POST' && url.pathname === '/companies') {
    return handleAddCompanyRequest(request);
  } else if (request.method === 'POST' && url.pathname === '/people') {
    return handleAddPersonRequest(request);
  } else if (
    request.method === 'PATCH' &&
    url.pathname.startsWith('/companies/')
  ) {
    return handleUpdateCompanyRequest(request);
  } else if (
    request.method === 'PATCH' &&
    url.pathname.startsWith('/people/')
  ) {
    return handleUpdatePersonRequest(request);
  } else if (
    request.method === 'DELETE' &&
    url.pathname.startsWith('/companies/')
  ) {
    return handleDeleteCompanyRequest(request);
  } else if (
    request.method === 'DELETE' &&
    url.pathname.startsWith('/people/')
  ) {
    return handleDeletePersonRequest(request);
  } else {
    return new Response('Not found', { status: 404 });
  }
};

console.log('Launching server on port 7777');
serve(handleRequest, { port: 7777 });
