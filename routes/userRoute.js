import { Router } from "express";

const userRoute = new Router()

userRoute.get('/', (req, res) => {
    res.send("Hello")
})

export default userRoute