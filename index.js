const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./Connection")
const response = require("./response")
app.use(bodyParser.json())

app.get("/", (req, res) => {
	response(200, "API v1 ready to go", "SUCCESS", res)
})

app.get("/mahasiswa", (req, res) => {
	const sql = `SELECT * FROM mahasisw`
	db.query(sql, (err, fields) => {
		if (err) throw err
		response(200, fields, "mahasiswa", res)
	})
})

app.get("/mahasiswa/:nim", (req, res) => {
	const nim = req.params.nim
	const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
	db.query(sql, (err, fields) => {
		response(200, fields, `spesifik mahasiswa by nim ${nim}`, res)
	})
})
app.post("/mahasiswa", (req, res) => {
	const {nim, namaLengkap, kelas, alamat} = req.body

	const sql = `INSERT INTO mahasiswa (nim,nama_lengkap,kelas,alamat) VALUES (${nim} ,'${namaLengkap}' ,'${kelas}' ,'${alamat}' )`

	db.query(sql, (err, fields) => {
		if (err) response(500, "invalid", "error", res)
		if (fields?.affectedRows) {
			const data = {
				isSuccess: fields.affectedRows,
				insertId: fields.insertId,
			}
			response(200, data, "Data Added Successfuly", res)
		}
	})
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
