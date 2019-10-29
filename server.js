const express = require('express');
const expressHandleBars  = require('express-handlebars');
const port = process.env.PORT || 3000; 
const app = express();
 
app.engine('handlebars', expressHandleBars());
app.set('view engine', 'handlebars');
app.use(express.json());

const routes = require('./controllers/burgers_controller.js');

app.use(routes)

app.listen(port, function() {
  console.log(`Server Running On Port: ${port}`);
});
