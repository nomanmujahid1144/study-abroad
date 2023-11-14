const express = require("express");
const dotenv = require("dotenv");
const mongoSanitizer = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const path = require("path");
const connectDb = require("./config/db");
const fileupload = require("express-fileupload");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
  allowEIO3: true,
});
const Emitter = require("events");

const errorResponse = require("./utils/errorResponse");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDb();

//event emmiter
const eventEmitter = new Emitter();
app.set("eventEmitter", eventEmitter);
app.set("io", io);

//Data sanitization against NoSQL query injection
app.use(mongoSanitizer());

//Data sanitization against xss(cross site scripting)
app.use(xss()); // this middleware is used to prevent any malicious stuff through html code

// Set security headers
app.use(helmet());

//Request Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 mins
  max: 500, //100 requests per 10 mins
});

//Route files
const user = require("./routes/user");
const admin = require("./routes/admin");
const blog = require("./routes/blog");
const about = require("./routes/about");
const contactmails = require("./routes/contactmails");
const universityFinder = require("./routes/universityfinder");
const schoarships = require("./routes/schoarships");
const accomodation = require("./routes/accomodation");
const formSubmission = require("./routes/formSubmission");

//Body Parser
app.use(express.json({ limit: "50mb" }));

// Dev logging middleware
app.use(morgan("dev"));

//File uploading
app.use(fileupload());

app.use(cors());
// Mount routers

app.use("/api/v1/user", user);
app.use("/api/v1/admin", admin);
app.use("/api/v1/blog", blog);
app.use("/api/v1/about", about);
app.use("/api/v1/contacts", contactmails);
app.use("/api/v1/universityFinder", universityFinder);
app.use("/api/v1/scholarship", schoarships);
app.use("/api/v1/accomodation", accomodation);
app.use("/api/v1/formsubmission", formSubmission);

// set static folder
app.use(express.static(path.join(__dirname, "public")));
// app.use('*', (req, res, next) => {
//     next(new errorResponse('resource not found', 404))
// })

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = http.listen(PORT, console.log(`server running on port ${PORT}`));

// Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
