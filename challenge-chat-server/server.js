const express = require("express");
const cors = require("cors");

const app = express();

//app.use(JSON());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/api/messages", (req, res) => {
//   res.send("hello");
// });
//Messages Api Routes
app.use("/api/messages", require("./routes/API/messages"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
