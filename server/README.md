# APIs

This project contains two APIs: Post API and DALL-E API.

## Root Route

This is a root route handler that returns a success message when the user sends a GET request to the root URL ("/").

- `GET /`

## Post API

The Post API allows users to create and retrieve posts. It has the following endpoints:

- `GET /api/v1/posts`: Returns all posts
- `POST /api/v1/posts`: Creates a new post

The API routes are defined in the `postRoutes.js` file and the controller functions are defined in the `postController.js` file.

## DALL-E API

The DALL-E API allows users to generate and retrieve DALL-E images by sending a prompt. It has the following endpoints:

- `GET /api/v1/dalle`: Returns all DALL-E images
- `POST /api/v1/dalle`: Generates a new DALL-E image

The API routes are defined in the `dalleRoutes.js` file and the controller functions are defined in the `dalleController.js` file.

Both APIs are used in the client-side of the application to retrieve data and to make new posts and DALL-E images.
