"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({ path: '.env' });
// Create the router
const app = (0, express_1.default)();
// Get the listening port of the router in the .env file (3000 by default)
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Set view engine to ejs
app.set('view engine', 'ejs');
// Link public directory
app.use(express_1.default.static('public'));
/* Default answer to client's request
app.get('/', (req, res) => {
    res.send('Hello World!');
});
*/
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/news', (req, res) => {
    res.render('news.ejs');
});
app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});
app.get('/about', (req, res) => {
    res.render('about.ejs');
});
// When the server is loaded and and starts listening
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map