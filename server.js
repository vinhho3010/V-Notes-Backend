const app = require("./app");
const config = require ("./app/config");
const connectDB = require("./app/ConnectDB/connectDB");
const Noteroutes = require ("./app/routes/note.route");
const ApiError = require ("./app/Error/api-error");

const PORT = config.app.port;

//connect to mongodb
connectDB();

//define route in server
app.use("/api/notes", Noteroutes);

//define error handle when don't have compatible route
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});


//run app
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
});