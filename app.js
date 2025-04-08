const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', require('./routes/index'));
app.use('/goals', require('./routes/goals'));


app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
