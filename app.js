import express from "express"
import userRoute from "./routes/userRoute.js"
import config from "./config/config.js"
import { start } from "./config/db.js"

const app = express()

const PORT = config.PORT

app.use('/user' ,userRoute)

start()

app.listen(PORT, () => {
    console.log(`⚡️[server] Server started @ http://localhost:${PORT}`)
})