import mongoose from "mongoose"
import config from "./config.js"

const start =  async () => {
    
    const url = config.MONGO_URL
    
    try{
        await mongoose.connect(url)
        console.log(`🔋[database] Database is connected`)
    } catch (e) {
        console.log(e)
    }
}

export {
    start
}