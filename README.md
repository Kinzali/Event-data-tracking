# Event Data Project

The goal of this project is that we can answer simple questions, such as “Has this user tried this feature already?” and “Has this new user logged in yet?

# Outline for project and core tasks for learning and implementation

## 1. Write a tracking plan for core events of the product

Create a tracking plan for the core events we want to track from users interacting with the product and product websites.

We have selected the basic tracking plan template provided by Segment as our tracking plan template. We could add the following columns to the tracking plan: **Name**, **Description**, **Properties**, **Property values**, **Data Type**, **Conversion**, **Location**, **Status**, **Code**.

From the tracking plan, we have selected the `Logged In` event, which we will implement the data pipelines for.

The `Logged In` event requires us to know the following properties and context about the situation of a user logging in:

- user_id
- event_id
- timestamp
- type
- url

## 2. Create a data warehouse (DWH) for customer and product-oriented data

Let's find a Docker image for setting up a simple Docker container with PostgreSQL database. The aim is to:

a. define the schemas for the different types of data we want to collect (at least Events, People, Companies)

b. initialize the tables for the data (Events, People, Companies)

c. learn how to access the database inside the container and add a row of test data (with psql or some graphical tool)

d. learn how to connect to the database outside of the container to add or update data

e. write the documentation of how the data warehouse is structured and how it is used/accessed/set up locally

Please follow the link to check how the Dataware house and API server are built. https://github.com/Kinzali/Event-data-tracking/blob/main/data_warehouse/README.md

## 3. Add tracking snippet into a web application

Based on the `Logged In` event defined in the tracking plan, we can add the tracking snippet to a web application (preliminarily a basic version of product documentation), which is run locally. (Hopefully, we could have this version of product documentation also run inside a Docker container.)

In this step, we add a tracking snippet to a login form, so that when a user _successfully_ logs in, a `Logged In` event is created and sent to the data warehouse.

This part of the project can include also the task of creating the modal or view for logging in (doesn't have to have real auth connected now). That would then mean writing HTML, CSS (or Tailwind CSS), and TypeScript to create a login form, which then creates the `Logged In` event when some conditions apply (i.e., successful login).

_One consideration is that would we want to use an event slinger in between the web application and the data warehouse. This is something that should be investigated. On the other hand, we can think how to write the tracking snippet that creates the event correctly and sends it to the data warehouse. Segment is one example of an event slinger, and it provides ready-written tracking snippets that can be used._

## 4. Create a report through PowerBI

In this step, we use PowerBI to connect to the data warehouse. We should be able to explore the data stored in the data warehouse through PowerBI.

After the connection can be succesfully made, the task is to create a report, which shows a) all the users that have logged in and b) when a user last logged in (in a column called "Last logged in"). This should be ordered so the most recent person to login would be first.
