import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
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
