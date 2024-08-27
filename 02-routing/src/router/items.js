import express from "express"
const itemsRouter = express.Router()

itemsRouter
	.route("/")
	.get((req, res) => {
		res.send("ini metode untuk get items")
	})
	.put((req, res) => {
		res.send("ini metode untuk put items")
	})
	.delete((req, res) => {
		res.send("ini metode untuk delete items")
	})
itemsRouter
	.route("/:id")
	.get((req, res) => {
		res.send("ini metode untuk get items dengan id = " + req.params.id)
	})
	.put((req, res) => {
		res.send("ini metode untuk put items dengan id = " + req.params.id)
	})
	.delete((req, res) => {
		res.send("ini metode untuk delete items dengan id = " + req.params.id)
	})

export default itemsRouter
