const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./Connection")

app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.send("Main")
})

app.get("/mahasiswa", (req, res) => {
	res.send("halaman mahasiswa")
})
app.get("/mahasiswa/:id", (req, res) => {
	const id = req.params.id
	res.send(`spesifik mahasiswa by id ${id}`)
})
app.post("/mahasiswa/:id", (req, res) => {})

app.put("/", (req, res) => {})
app.delete("/", (req, res) => {})

app.get("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

app.listen(port, () => {
	console.log(`Port Running In http://localhost:${port}`)
})
