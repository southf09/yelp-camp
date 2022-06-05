const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true, 
   useUnifiedTopology: true 
}, err => {
   if(err) throw err;
   console.log('Connected to MongoDB!!!')
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) =>{
    res.render('home')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})