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

app.put("/mahasiswa", (req, res) => {
	const {nim, namaLengkap, kelas, alamat} = req.body
	const sql = `UPDATE mahasiswa SET nama_lengkap='${namaLengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`
	db.query(sql, (err, fields) => {
		if (err) response(500, "Update Invalid", "invalid", res)
		if (fields?.affectedRows) {
			const data = {
				isSuccess: fields.affectedRows,
				message: fields.message,
			}
			response(200, data, "SUCCESS", res)
		} else {
			response(404, "User not found", "error", res)
		}
	})
})
app.delete("/mahasiswa", (req, res) => {
	const {nim} = req.body
	const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`
	db.query(sql, (err, fields) => {
		if (err) response(500, "Delete Invalid", "error", res)
		if (fields?.affectedRows) {
			const statusMessage =
				fields.serverStatus === 2 ? "Delete Success" : "User not found"
			const data = {
				isSuccess: fields.affectedRows,
				Status: statusMessage,
			}
			response(200, data, "SUCESS", res)
		} else {
			response(404, "User not found", "error", res)
		}
	})
})

app.get("*", (req, res) => {
	res.status(404)
	res.send("Not Found")
})

app.listen(port, () => {
	console.log(`Port Running In http://localhost:${port}`)
})
