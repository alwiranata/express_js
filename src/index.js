import express from "express"
import url from "url"
const app = express()
const port = 3000

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

app.get("/", (req, res) => {
	// res.json({
	// 	name: "Aldo",
	// 	old: 18,
	// })
	res.sendFile("./page/index.html", {root: __dirname})
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
