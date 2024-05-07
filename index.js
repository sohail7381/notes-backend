const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/notes.model')
const noteRoute = require('./routes/note.route');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/notes', noteRoute);

mongoose.connect('mongodb+srv://ansarisohail7381:kEKDHV8myOUYp3eS@cluster0.flm3fgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  })
  .catch(() => {
    console.log("error");
  })

