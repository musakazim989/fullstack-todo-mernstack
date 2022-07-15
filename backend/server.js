import "dotenv/config"
import express from "express"
import serverRoute from "./routes/serverRoute.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use("/", serverRoute)

app.listen(PORT, () => {
  console.log(`Backend runnig on ${PORT}`)
})
