import express from "express"
import exampleController from "../controllers/example.js"

var router = express.Router()

router.get("/", exampleController.index);

export default router