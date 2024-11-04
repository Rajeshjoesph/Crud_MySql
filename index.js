const express = require("express");

const db = require("./config/connection");
const { post, allData, Update, Delete } = require("./src/controllor");
const app = express();
app.use(express.json());
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected Successfully");
});

// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });

app.post("/post", post);
app.get("/all", allData);
app.put("/update/:id", Update);
app.delete("/delete/:id", Delete);

app.listen("3000", () => {
  console.log("==================");
  console.log("server running on 3000");
  console.log("==================");
});
