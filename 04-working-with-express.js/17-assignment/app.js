const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/index')
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(mainRoutes); // funnels all req inside routes/index.js
app.listen(3000);