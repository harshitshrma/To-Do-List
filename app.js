const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')

require('./models/wish')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
 
// parse application/json
app.use(bodyParser.json())

// import routes
require('./routes')(app);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
    const path = require('path');
    // no matter what route client requests, we send only 1 file i.e. index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log("server is running on port: " + port)
})
