import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            // "mongodb://127.0.0.1:27017",
            `${process.env.DATA_BASE_URL}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        )
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB
