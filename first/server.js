const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./schemas'); 
const cors = require('cors');

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // <-- Use the cors middleware with options
const connectionString = 'mongodb+srv://Shoheb:Shaik123@cluster0.2jdjiiw.mongodb.net/Portfolios?retryWrites=true&w=majority';
// const connectionString = 'mongodb://127.0.0.1:27017/portfolios';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected successfully");
}).catch((err) => {
  console.log("Connection error", err); // <-- Provide the error object here
});

app.use(express.json());

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/new', (req, res) => {
  user.create(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get('/portfolio/:username', (req, res) => {
  user.findOne({userName:req.params.username}).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
