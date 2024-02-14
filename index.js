require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require("./config/dbConnection");

// Server Configurations
const app = express();

// parse application/json
app.use(bodyParser.json());

// Welcome route
app.use('/', (req, res) => {
    res.send('Welcome to the Baxture - NodeJS Backend Assignment');
});

// Error handling middleware
app.use(require('./middleware/errorHandlerMiddleware'));

// Get port from environment
const port = process.env.PORT || 8080;
if (!port) throw new Error("PORT is not defined in the environment variables.");

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await connect();
});
