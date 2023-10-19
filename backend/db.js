const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/Inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;

// mongoose.connect(mongoURI, () => {
    //     console.log("Connected to Mongo Successfully");
    // })
    // mongoose.connect(mongoURL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    // }, (err) => {
    //     if (err) throw new Error("Connect error to MongoDB");
    //     console.log("MongoDB connected!");
    // });