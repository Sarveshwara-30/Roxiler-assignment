require('dotenv').config();
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./api'); // Ensure this is the correct path
const mongoConnect = require('./mongoConnect');

const app = express();

mongoConnect();
app.use(express.json());
app.use(cors());

console.log(typeof apiRoutes); // Should print 'function'
app.use('/', apiRoutes); // Ensure apiRoutes is a router function

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
