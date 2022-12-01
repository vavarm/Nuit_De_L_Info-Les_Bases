import dotenv from 'dotenv'
import express, {Express, Request, Response} from 'express'

// Load environment variables from .env (variables globally available in process.env)
dotenv.config({path: '.env'})

// Create the router
const app: Express = express()
// Get the listening port of the router in the .env file (3000 by default)
const port = process.env.PORT || 3000

// Allow to parse JSON in the body of the request
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Set view engine to ejs
app.set('view engine', 'ejs')

// Link public directory
app.use(express.static('public'))

/* Default answer to client's request
app.get('/', (req, res) => {
	res.send('Hello World!');
});
*/

app.get('/', (req: Request, res: Response) => {
    res.render('index.ejs')
})

app.get('/news', (req: Request, res: Response) => {
    res.render('news.ejs')
})

app.get('/contact', (req: Request, res: Response) => {
    res.render('contact.ejs')
})

app.get('/about', (req: Request, res: Response) => {
    res.render('about.ejs')
})

// When the server is loaded and starts listening
app.listen(port, () => {
    return console.log(`[Server]: Express is listening at http://localhost:${port}`);
})
