# Sprint 7 Project: Urban Grocers API Testing

## Project Description

The purpose of this project is to apply JavaScript knowledge to write automated tests for the Urban Grocers API, using the provided API documentation.

The tests check response status codes and response body data for GET, POST, PUT, and DELETE requests.

## Documentation Source

The tests are based on the Urban Grocers API documentation provided by TripleTen (apiDoc).

## Technologies and Techniques

- **JavaScript:** Writing the tests.
- **Node.js:** Running JavaScript code.
- **Jest:** Running tests and checking expected results.
- **Fetch API:** Sending HTTP requests and receiving responses.
- **JSON:** Sending request data and parsing response bodies.
- **VS Code:** Writing and editing the tests.
- **Git and GitHub:** Managing the project files and submitting the project.

## How to Run the Tests

### 1. Install Dependencies

Open Git Bash in the project root directory and run:

```bash
npm install
```

This installs the project's required packages.

### 2. Run an Individual Test File

Run the relevant command in the terminal:

```bash
npx jest tests/getWarehouses.test.js
npx jest tests/getKitSearch.test.js
```

For the other test files, use the corresponding filename:

```bash
npx jest tests/postHandlers.test.js
npx jest tests/putHandlers.test.js
npx jest tests/deleteHandlers.test.js
```

### 3. Configure the API URL

Before running the tests, make sure that `config.js` contains the current Urban Grocers server URL provided by the course. The URL may need to be updated when the server is restarted.