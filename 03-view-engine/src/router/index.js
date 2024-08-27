import express from "express"
import itemsRouter from "./items.js"
const router = express.Router()

router.use("/", (req, res) => {
	const title = {
		title: "NEW TITLE",
	}
	res.render("index", title)
})

router.use("/items", itemsRouter)

router.use("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

export default router
