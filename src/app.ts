import dotenv from 'dotenv';
import express from 'express';

dotenv.config({path: '.env'});

// Create the router
const app = express();
// Get the listening port of the router in the .env file (3000 by default)
const port = process.env.PORT || 3000;

// Use the 'public' directory as static space (contains the pages sent to the client)
app.use(express.static("public"));

/* Default answer to client's request
app.get('/', (req, res) => {
	res.send('Hello World!');
});
*/

// When the server is loaded and and starts listening
app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
