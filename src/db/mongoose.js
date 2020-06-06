const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  // autoIndex: true
});

// const task = new Task({
//     description:'complete this node course',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task);

// }).catch((error) => {
//     console.log(error);

// })
