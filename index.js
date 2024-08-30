const express = require("express")
const app = express()
const port = 3000

app.use(express.json()) // Mem-parsing data dalam format JSON

app.get("/", (req, res) => {
	res.send("Hello World")
})

app.get("/main", (req, res) => {
	res.send("Main Pages")
})

app.post("/login", (req, res) => {
	if (req.body.name === "aldo") {
		console.log("login suceess")
	}
})

app.get("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

app.listen(port, () => {
	console.log(`Port Running In http://localhost:${port}`)
})
