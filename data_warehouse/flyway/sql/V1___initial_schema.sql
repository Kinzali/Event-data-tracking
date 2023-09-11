CREATE TABLE names (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL
);

CREATE TABLE companies (
    company_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE people (
    person_id  VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    phone_number VARCHAR(255),
    company_id VARCHAR(255),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    person_id  VARCHAR(255),
    type VARCHAR(255),
    timestamp TIMESTAMP,
    url VARCHAR(255),
    FOREIGN KEY (person_id) REFERENCES people(person_id)
);
