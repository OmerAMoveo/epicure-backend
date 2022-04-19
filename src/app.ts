import http = require('http');
import express = require('express');
const routes = require('./Routes/routes');
const cors = require('cors');
export const app = express();

app.use(cors());
app.use('/', routes);

export const server = http.createServer(app);

server.listen(8080);
