const express = require("express")
const app = express()
const port = 3000

app.use(express.json()) // Mem-parsing data dalam format JSON

app.get("/", (req, res) => {
	res.send("Main Page")
})

app.get("/hello", (req, res) => {
	console.log({getParams: req.query})
	res.send("Hello World")
})

app.post("/login", (req, res) => {
	console.log({reqFromOutside: req.body})
	if (req.body.name === "aldo" && req.body.password === "123") {
		res.send("login suceess")
	} else {
		res.send("Name Failed")
	}
})

app.put("/username", (req, res) => {
	console.log({updateData: req.body})
	res.send("Update Success")
})

app.get("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

app.listen(port, () => {
	console.log(`Port Running In http://localhost:${port}`)
})
