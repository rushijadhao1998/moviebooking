const express = require('express');
const app = express();
const cors = require('cors');



const PORT = 8085;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.get("/", (req, res) => {
  res.json({"message":"Movie booking application"});
});




app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});



app.get('/movies', (req, res) => {
  res.send("All Movies Data in JSON format from Mongo DB");
})
app.get('/genres', (req, res) => {
  res.send("All Genres Data in JSON format from Mongo DB");
})
app.get('/artists', (req, res) => {
  res.send("All Artists Data in JSON format from Mongo DB");
})



app.listen(9000, () => {
  console.log("Server Started");
});







app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


  