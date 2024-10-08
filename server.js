const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees");
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  const obj = employees.find((employee) => employee.id === +id);

  if (obj) {
    res.json(obj);
  } else {
    res.status(404).send("There is no employee with that id.");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
