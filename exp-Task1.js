// const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('into the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('into another middleware');
    res.send('<h1>Hello from express </h1>')
})
// const server = http.createServer(app);

// server.listen(3000, 'localhost', ()=> {
//     console.log('server running at port 3000');
// });

// we can replace the above code by following code
app.listen(3000, () =>{
    console.log('server running at port 3000')
});