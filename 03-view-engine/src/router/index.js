import express from "express"
import itemsRouter from "./items.js"
const router = express.Router()

router.use("/", (req, res) => {
	const layout = "layout/main-layout.ejs"
	const title = "EJS"
	const table = "Items"
	const data = {
		data: [
			{
				id: 100,
				items: "baju",
			},
			{
				id: 200,
				items: "Celana",
			},
		],
	}
	res.render("index", {
		layout: layout,
		title: title,
		table: table,
		data: data,
	})
})

router.use("/items", itemsRouter)

router.use("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

export default router
