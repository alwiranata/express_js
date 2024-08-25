import express from "express"
// import url from "url"
import router from "./router/index.js"
const app = express()
const port = 3000

app.use(router)
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

// app.get("/", (req, res) => {
// 	// res.json({
// 	// 	name:   "Aldo",
// 	// 	old: 18,
// 	// })
// 	res.sendFile("./page/index.html", {root: __dirname})
// })

// app.get("/about", (req, res) => {
// 	res.sendFile("./page/about.html", {root: __dirname})
// })

// app.get("/contact", (req, res) => {
// 	res.sendFile("./page/contact.html", {root: __dirname})
// })

// app.get("/items/:id", (req, res) => {
// 	// console.log(req.params)
// 	const id = req.params.id
// 	const category = req.query.category
// 	res.send("No items" + " " + id + "<br> and Category " + category)
// })
// app.get("/", (req, res) => {
// 	res.send("Page Main")
// })

// app.get("/barangs", (req, res) => {
// 	res.send("ini metode get barang")
// })

// app.post("/barangs", (req, res) => {
// 	res.send("ini metode post barang")
// })

// app.put("/barangs", (req, res) => {
// 	res.send("ini metode put barangs")
// })

// app.delete("/barangs", (req, res) => {
// 	res.send("ini metode delete barang")
// })
// app.all("/items", (req, res) => {
// 	res.send("ini metode all items")
// })

// app.use("*", (req, res) => {
// 	res.status(404).send("Page Not Found")
// })
// app.get("/random.text", (req, res) => {
// 	res.send("random text")
// })

// app.get("/ab?cd", (req, res) => {
// 	res.send("Ini metode ab?cd")
// })

// app.get("/ab+cd", (req, res) => {
// 	res.send("ini metode ab+cd")
// })

// app.get("/ab*cd", (req, res) => {
// 	res.send("ini metode ab*cd")
// })

// app.get("/abcd?(e)", (req, res) => {
// 	res.send("ini metode get untuk ab(cd)?e")
// })

// app.get("/barangs", (req, res) => {
// 	res.send("ini metode get barang")
// })
// app.get("/barangs/:id", (req, res) => {
// 	res.send("ini metode get barang dengan id = " + req.params.id)
// })

// app.post("/barangs", (req, res) => {
// 	res.send("ini metode post barang")
// })

// app.put("/barangs/:id", (req, res) => {
// 	res.send("ini metode put barangs dengan id =" + req.params.id)
// })

// app.delete("/barangs/:id", (req, res) => {
// 	res.send("ini metode delete barang dengan id =" + req.params.id)
// })

// const try1 = function (req, res, next) {
// 	console.log("callback 1")
// 	next()
// }
// const try2 = function (req, res, next) {
// 	console.log("callback 2")
// 	next()
// }

// const try3 = function (req, res, next) {
// 	console.log("callback 3")
// 	next()
// }

// app.get("/try", [try1, try2, try3], (req, res) => {
// 	res.send("Try success running")
// })

// app
// 	.route("/items")
// 	.get((req, res) => {
// 		res.send("ini metode untuk get items")
// 	})
// 	.put((req, res) => {
// 		res.send("ini metode untuk put items")
// 	})
// 	.delete((req, res) => {
// 		res.send("ini metode untuk delete items")
// 	})
// app
// 	.route("/items/:id")
// 	.get((req, res) => {
// 		res.send("ini metode untuk get items dengan id = " + req.params.id)
// 	})
// 	.put((req, res) => {
// 		res.send("ini metode untuk put items dengan id = " + req.params.id)
// 	})
// 	.delete((req, res) => {
// 		res.send("ini metode untuk delete items dengan id = " + req.params.id)
// 	})

app.listen(port, () => {
	console.log(`Server running to http://localhost:${port}`)
})
