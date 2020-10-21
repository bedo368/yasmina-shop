import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://bedo:Aa00110022@cluster0.u2zoo.mongodb.net/mern-shop",
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
