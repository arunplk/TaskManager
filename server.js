const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Task Manager API is running. See /tasks endpoints.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
