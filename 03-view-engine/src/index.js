import express from "express"
import router from "./router/index.js"
import path from "path"
import url from "url"
import expressEjsLayouts from "express-ejs-layouts"

const app = express()
const port = 3000
const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.use(router)

app.listen(port, () => {
	console.log(`Server running to http://localhost:${port}`)
})
