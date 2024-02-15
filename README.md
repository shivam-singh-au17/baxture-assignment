# Text Analysis Backend Documentation

This backend system provides APIs for uploading text files, initiating text analysis tasks, and retrieving the analysis results. It is built using Node.js, Express.js, and MongoDB, with file upload functionality handled using Multer.

## How to Run the Project Locally

1. Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

2. Clone or download the repository containing the game files to your local machine.
```
git clone https://github.com/shivam-singh-au17/baxture-assignment.git
```

3. Open your terminal or command prompt and navigate to the directory where you have downloaded the game files.

4. Run the following command to install dependencies:
```
npm install
```

5. Once the dependencies are installed, run the following command to start the game:
```
npm start
```

## API Endpoints

   - **Upload Text File**:
      - **Method**: POST
      - **Endpoint**: `/api/text-file/upload`
      - **Description**: Upload a text file.
      - **Parameters**: File upload as `multipart/form-data`.
      - **Response**: JSON response with the uploaded file ID.

   - **Initiate Text Analysis Task**:
      - **Method**: POST
      - **Endpoint**: `/api/task-analysis`
      - **Description**: Initiate a text analysis task on an uploaded file.
      - **Query Parameters**: `fileId` (ID of the uploaded file).
      - **Request Body**: `{ "operation": "<operation_name>", "options": { "topWords": <k> } }`
      - **Response**: JSON response with the task ID.

   - **Retrieve Analysis Results**:
      - **Method**: GET
      - **Endpoint**: `/api/task-analysis/result`
      - **Description**: Retrieve the results of a text analysis task.
      - **Query Parameters**: `taskId` (ID of the analysis task).
      - **Response**: JSON response with the analysis results.

## Design Decisions

- **Modular Structure**: The project is structured into separate files for controllers, services, models, validations, and utilities, following the MVC pattern for better organization and maintainability.

- **File Upload with Multer**: File upload functionality is implemented using Multer middleware, which provides flexibility in configuring file storage settings and handling file uploads.

- **Database Schema**: MongoDB is used as the database, with Mongoose as the ODM. Schemas are defined for text files and task analysis results, allowing for efficient storage and retrieval of data.

- **Error Handling**: Error handling middleware is implemented to catch and handle errors gracefully, providing appropriate error responses with status codes and error messages.

- **Validation**: Input validation is performed using Joi to ensure that requests meet the required format and constraints, preventing invalid data from being processed.

- **Response Handling**: Response handling utility functions are used to standardize JSON responses, making it easier to manage and maintain consistent response formats across different API endpoints.


## Deployment

The API is deployed on a free platform for testing purposes. You can access the endpoints using a tool like Postman to interact with the API.

**Repository URL**: [GitHub Repository](https://github.com/shivam-singh-au17/baxture-assignment)

**API URL**: [API Endpoint](https://baxture-assignment.onrender.com/api)

## Postman Collection and Environment

To interact with the API using Postman, you can download & import the provided collection and environment file links.

- [Postman Collection File](https://github.com/shivam-singh-au17/baxture-assignment/blob/master/baxture-assignment.postman_collection.json)
- [Postman Environment File](https://github.com/shivam-singh-au17/baxture-assignment/blob/master/baxture-assignment.postman_environment.json)


Feel free to explore the API and provide feedback or suggestions for improvement. Thank you for your attention!