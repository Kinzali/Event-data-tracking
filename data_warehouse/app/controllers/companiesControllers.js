import {
  getCompanyById,
  logCompanies,
  insertCompany,
  updateCompanyById,
  deleteCompanyById,
} from '../services/companiesServices.js';

export const handleCompaniesRequest = async () => {
  try {
    const companies = await logCompanies();
    // Convert the result to JSON
    const companiesJson = JSON.stringify(companies);

    // Return the result as a JSON string
    return new Response(companiesJson, {
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

export const handleCompanyByIdRequest = async (companyId) => {
  // Check if the companyId is a non-empty string
  if (typeof companyId !== 'string' || companyId.trim().length === 0) {
    return new Response('Invalid Company ID', { status: 400 });
  }

  try {
    const company = await getCompanyById(companyId);
    if (company) {
      // If the company is found, return it as JSON response
      return new Response(JSON.stringify(company), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // If the company is not found, return a 404 response
      return new Response('Company not found', { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
    // Return a more specific error response
    return new Response('Error fetching company from the database', {
      status: 500,
    });
  }
};

export const handleAddCompanyRequest = async (request) => {
  // curl -X POST -H "Content-Type: application/json" -d '{
  //   "company_id": "abc.com",
  //   "name": "abc telecom"
  // }' http://localhost:7777/companies
  try {
    const body = await request.json(); // Assuming the data sent is in JSON format
    // Validate the data in the body, making sure it contains all required fields
    if (!body.company_id || !body.name) {
      return new Response('Invalid request data', {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Insert the new company into the database
    const newCompanyId = await insertCompany(body);

    // Return the newly created company ID as a response
    return new Response(JSON.stringify({ company_id: newCompanyId }), {
      status: 201, // 201 Created status code for successful creation
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding company:', error);
    return new Response('Error adding company to the database', {
      status: 500,
    });
  }
};

export const handleUpdateCompanyRequest = async (request) => {
  // curl -X PATCH -H "Content-Type: application/json" -d '{
  //   "name": "Updated Company Name"
  // }' http://localhost:7777/companies/abc.com
  try {
    const body = await request.json(); // Assuming the data sent is in JSON format

    // Extract company id from request URL
    const url = new URL(request.url);
    const paths = url.pathname.split('/');
    const companyId = paths[paths.length - 1];

    // Update the company in the database
    const updatedCompanyId = await updateCompanyById(companyId, body);

    // Return the updated company ID as a response
    return new Response(JSON.stringify({ company_id: updatedCompanyId }), {
      status: 200, // 200 OK status code for successful update
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating company:', error);
    return new Response('Error updating company in the database', {
      status: 500,
    });
  }
};

export const handleDeleteCompanyRequest = async (request) => {
  // curl -X DELETE http://localhost:7777/companies/{companyId}
  try {
    const url = new URL(request.url);
    const paths = url.pathname.split('/');
    const companyId = paths[paths.length - 1];

    const deletedCompanyId = await deleteCompanyById(companyId);

    return new Response(JSON.stringify({ company_id: deletedCompanyId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting company:', error);
    return new Response('Error deleting company from the database', {
      status: 500,
    });
  }
};
