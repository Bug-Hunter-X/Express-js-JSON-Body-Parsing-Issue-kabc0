# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where the request body is not parsed correctly when the `Content-Type` header is missing or incorrectly set.  This can lead to `req.body` being empty, resulting in unexpected application behavior.

The `bug.js` file demonstrates the problematic code, while `bugSolution.js` shows how to resolve the issue.

## Setup:

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install express`
4. Run `node bug.js`
5. Send a POST request to `http://localhost:3000/data` with a JSON payload.

## Solution:

The `bugSolution.js` file corrects the issue by using `express.json()` middleware.