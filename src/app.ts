import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

dotenv.config({ path: '.env' })

// Create the router
const app = express()
// Get the listening port of the router in the .env file (3000 by default)
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set view engine to ejs
app.set('view engine', 'ejs')

// Link public directory
app.use(express.static('public'))

/* Default answer to client's request
app.get('/', (req, res) => {
	res.send('Hello World!');
});
*/

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.get('/news', (req, res) => {
	res.render('news.ejs')
})

app.get('/contact', (req, res) => {
	res.render('contact.ejs')
})

app.get('/about', (req, res) => {
	res.render('about.ejs')
})

// When the server is loaded and and starts listening
app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`)
})
