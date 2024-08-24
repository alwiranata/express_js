import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) => {
	res.json({
		name: "Aldo",
		old: 18,
	})
})

app.get("/home", (req, res) => {
	res.send("Page home")
})

app.use("*", (req, res) => {
	res.status(404).send("Page Not Found")
})

app.listen(port, () => {
	console.log(`Server running to http://localhost:${port}`)
})
