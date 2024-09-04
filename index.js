const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./Connection")
const response = require("./response")
app.use(bodyParser.json())

app.get("/", (req, res) => {
	response(200, "getData", "Hello World", res)
})

app.get("/mahasiswa", (req, res) => {
	response(200, "mahasiswa", "mahasiswa", res)
})
app.get("/mahasiswa/:nim", (req, res) => {
	const nim = req.params.nim
	response(200, "spesifix", `spesifik mahasiswa by nim ${nim}`, res)
})
app.post("/mahasiswa/:id", (req, res) => {
	response(200, "post mahasiswa", "mahasiswa", res)
})

app.put("/", (req, res) => {
	response(200, "put mahasiswa", "mahasiswa", res)
})
app.delete("/", (req, res) => {
	response(200, "delete mahasiswa", "mahasiswa", res)
})

app.get("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

app.listen(port, () => {
	console.log(`Port Running In http://localhost:${port}`)
})
