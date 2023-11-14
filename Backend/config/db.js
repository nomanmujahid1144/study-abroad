const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect("mongodb://localhost/study-abroad", {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/study-abroad", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
