import express from "express"
import url from "url"
const app = express()
const port = 3000

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

app.get("/", (req, res) => {
	// res.json({
	// 	name:   "Aldo",
	// 	old: 18,
	// })
	res.sendFile("./page/index.html", {root: __dirname})
})

app.get("/about", (req, res) => {
	res.sendFile("./page/about.html", {root: __dirname})
})

app.get("/contact", (req, res) => {
	res.sendFile("./page/contact.html", {root: __dirname})
})

app.get("/items/:id", (req, res) => {
	// console.log(req.params)
	const id = req.params.id
	const category = req.query.category
	res.send("No items" + " " + id + "<br> and Category " + category)
})

app.use("*", (req, res) => {
	res.status(404).send("Page Not Found")
})

app.listen(port, () => {
	console.log(`Server running to http://localhost:${port}`)
})
