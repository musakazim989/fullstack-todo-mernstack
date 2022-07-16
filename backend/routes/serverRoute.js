import express from "express"
import serverMode from "../model/serverMode.js"
const serverRouter = express.Router()

serverRouter.post("/add", (req, res) => {
  const details = {
    task: req.body.users.task,
    durationtime: req.body.users.durationTime,
    date: req.body.users.date,
  }

  const tododetails = new serverMode(details)
  tododetails.save()
  console.log(req.body.users)
})

serverRouter.get("/get", async (req, res) => {
  const tododetails = await serverMode.find()
  res.send(tododetails)
})

serverRouter.post("/delete", async (req, res) => {
  serverMode.findByIdAndDelete(req.body.id, (err, docs) => {
    err ? console.log(err) : `Delete: ${docs}`
  })
  // console.log(req.body.id)
})

export default serverRouter
