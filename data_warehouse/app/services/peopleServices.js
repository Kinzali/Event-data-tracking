import { sql } from '../database/database.js';

// Execute a SQL query to retrieve people (limited to 100)
export const logPeople = async () => {
  const result = await sql`SELECT * FROM people LIMIT 100`;
  console.log('people are', result);
  return result;
};

// Execute a SQL query to retrieve person by person Id
const getPersonById = async (personId) => {
  const result = await sql`SELECT * FROM people WHERE person_id = ${personId}`;
  return result[0]; // Assuming the 'person_id' column is unique, return the first row
};

export { getPersonById };

// Execute a SQL query to insert a new company into the database
export const insertPerson = async (personData) => {
  const { person_id, name, phone_number, company_id } = personData;

  const result = await sql`
      INSERT INTO people (person_id, name, phone_number, company_id)
      VALUES (${person_id}, ${name}, ${phone_number}, ${company_id});
    `;

  // If successful, return the provided person_id
  return person_id;
};

// Execute a SQL query to update an existing person in the database
export const updatePersonById = async (personId, personData) => {
  const { name, phone_number, company_id } = personData;

  const result = await sql`
      UPDATE people 
      SET name = ${name}, phone_number = ${phone_number}, company_id = ${company_id}
      WHERE person_id = ${personId};
    `;

  // If successful, return the updated person's id
  return personId;
};

// Execute a SQL query to delete a person by ID
export const deletePersonById = async (personId) => {
  const result = await sql`
      DELETE FROM people 
      WHERE person_id = ${personId};
    `;

  return personId;
};