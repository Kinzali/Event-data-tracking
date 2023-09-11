import { sql } from '../database/database.js';

// Execute a SQL query to retrieve companies (limited to 100)
const logCompanies = async () => {
  const result = await sql`SELECT * FROM companies LIMIT 100`;
  console.log('Companies are', result);
  return result;
};

export { logCompanies };
// Execute a SQL query to retrieve company by ecompant Id
const getCompanyById = async (companyId) => {
  const result =
    await sql`SELECT * FROM companies WHERE company_id = ${companyId}`;
  return result[0]; // Assuming the 'event_id' column is unique, return the first row
};

export { getCompanyById };

// Execute a SQL query to insert a new company into the database
export const insertCompany = async (companyData) => {
  const { company_id, name } = companyData;

  const result = await sql`
      INSERT INTO companies (company_id, name)
      VALUES (${company_id}, ${name});
    `;

  // If successful, return the provided company_id
  return company_id;
};

// Execute a SQL query to update an existing company in the database
export const updateCompanyById = async (companyId, companyData) => {
  const { name } = companyData;

  const result = await sql`
      UPDATE companies 
      SET name = ${name}
      WHERE company_id = ${companyId};
    `;

  // If successful, return the updated company's id
  return companyId;
};

// Execute a SQL query to delete a company by ID
export const deleteCompanyById = async (companyId) => {
  const result = await sql`
      DELETE FROM companies 
      WHERE company_id = ${companyId};
    `;

  return companyId;
};
