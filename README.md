# First REST API - Subscriber Management

This is a simple REST API built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**. The API performs basic CRUD (Create, Read, Update, Delete) operations on a collection of subscribers. Each subscriber is an object with attributes: `name` (the subscriber's name) and `channel` (the channel to which the subscriber is subscribed).

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create Subscriber](#create-subscriber)
  - [Get All Subscribers](#get-all-subscribers)
  - [Get Subscriber By ID](#get-subscriber-by-id)
  - [Update Subscriber](#update-subscriber)
  - [Delete Subscriber](#delete-subscriber)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project serves as an introduction to building a REST API with Node.js, Express, and MongoDB. It allows users to manage a list of subscribers, each of whom is subscribed to a specific channel. The API is able to perform the following operations:

- **Create** a new subscriber.
- **Read** subscriber information.
- **Update** subscriber details.
- **Delete** a subscriber from the system.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the server-side application.
- **Express.js**: Web framework for Node.js, used to handle HTTP requests and routes.
- **MongoDB**: NoSQL database used to store subscriber data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to interact with the database.
- **Nodemon**: Tool that automatically restarts the server when code changes are detected, useful for development.
- **REST Client**: VS Code extension for testing the API using `.http` files.
  
## Installation

To run this API locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mack-20/first-rest-api.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd first-rest-api
   ```

3. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org) installed. Then, run:
   ```bash
   npm install
   ```

4. **Set up MongoDB**:
   You can use a local MongoDB server or MongoDB Atlas for a cloud database. Update the `MONGODB_URI` in your `.env` file with your MongoDB connection string.

5. **Run the API**:
   To start the server with **Nodemon** (which will automatically restart on file changes during development), run:
   ```bash
   npm run start
   ```
   The server will start running on `http://localhost:3000`.

## API Endpoints

### Create Subscriber

- **Endpoint**: `POST /subscribers`
- **Description**: Create a new subscriber.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "subscribedToChannel": "Tech Talks"
  }
  ```
- **Response**: 201 Created

### Get All Subscribers

- **Endpoint**: `GET /subscribers`
- **Description**: Retrieve a list of all subscribers.
- **Response**:
  ```json
  [
    {
      "_id": "605c72ef1532076f8f6c6a30",
      "name": "John Doe",
      "subscribedToChannel": "Tech Talks"
    },
    {
      "_id": "605c72ef1532076f8f6c6a31",
      "name": "Jane Doe",
      "subscribedToChannel": "Cooking Channel"
    }
  ]
  ```

### Get Subscriber By ID

- **Endpoint**: `GET /subscribers/:id`
- **Description**: Get a subscriber by their ID.
- **Parameters**: 
  - `id`: The subscriber's unique MongoDB ObjectID.
- **Response**:
  ```json
  {
    "_id": "605c72ef1532076f8f6c6a30",
    "name": "John Doe",
    "subscribedToChannel": "Tech Talks"
  }
  ```

### Update Subscriber

- **Endpoint**: `PATCH /subscribers/:id`
- **Description**: Update an existing subscriber's information.
- **Request Body**:
  ```json
  {
    "name": "John Doe Updated",
    "subscribedToChannel": "Tech Talks Advanced"
  }
  ```
- **Response**: 200 OK

### Delete Subscriber

- **Endpoint**: `DELETE /subscribers/:id`
- **Description**: Delete a subscriber by their ID.
- **Response**: 200 OK

## Testing the API

To easily test the API, a `rest-api-test.http` file is included in the repository. You can use this file in **Visual Studio Code** with the **[REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)**, which allows you to send HTTP requests directly from a `.http` file.

### Steps for testing with the REST Client extension:

1. Open the `rest-api-test.http` file in **Visual Studio Code**.
2. The file contains predefined HTTP requests to test all the CRUD operations.
3. Simply click on the `Send Request` link above each HTTP request block to send the request to the API.
4. View the responses directly in the editor.

Example requests from `rest-api-test.http`:

- **Create a Subscriber**:
  ```
  POST http://localhost:3000/subscribers
  Content-Type: application/json

  {
    "name": "John Doe",
    "subscribedToChannel": "Tech Talks"
  }
  ```

- **Get All Subscribers**:
  ```
  GET http://localhost:3000/subscribers
  ```

This makes it easy to interact with the API without needing an external tool like Postman. Just use the REST Client extension in VS Code to quickly test and interact with your API.

## Contributing

Feel free to fork this repository, make changes, and create pull requests. If you find any issues or have suggestions for improvements, please open an issue.

## License

This project is open-source and available under the MIT License.
