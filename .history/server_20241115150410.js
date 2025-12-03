js
 //server.js
 const express=
 require('express')
 const app= express()
const port = 3000;

// define a route
app.get('/', (req, res))=> {
    res.send(', Hello, world! This is a back end.');
});

//start the server
app.listen(port, () => {
    console.log(^ serverjs)
}