import mongoose from "mongoose";

const db = (url) => {
    // help for searchability
    mongoose.set("strictQuery", true);

    // db connection
    mongoose.connect(url)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); 
    })

}
export default db;
