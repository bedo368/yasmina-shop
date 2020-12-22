import express from "express"
const router = express.Router()

import {userLogin ,userRegister ,checkToken} from "./authFunctions.js"

router.post("/login" , userLogin )
router.post("/register" , userRegister )
router.post("/checktoken" , checkToken )

export default router