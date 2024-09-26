const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 2400;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handlebars setup
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
