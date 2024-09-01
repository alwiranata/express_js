const express = require("express")
const app = express()
const port = 3000
const db = require("./Connection.js")
const response = require("./Response.js")

app.use(express.json()) // Mem-parsing data dalam format JSON

app.get("/", (req, res) => {
	const sql = "SELECT * FROM mahasiswa"
	db.query(sql, (error, result) => {
		response(200, result, "get all data from mahasiswa", res)
	})
})

app.get("/find", (req, res) => {
	const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim =${req.query.nim}`
	db.query(sql, (error, result) => {
		response(200, result, "find mahasiswa name", res)
	})
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
