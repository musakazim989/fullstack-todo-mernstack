import express from "express"
import serverMode from "../model/serverMode.js"
const serverRouter = express.Router()

serverRouter.post("/add", (req, res) => {
  const details = {
    task: req.body.users.task,
    durationtime: req.body.users.durationTime,
  }

  const tododetails = new serverMode(details)
  tododetails.save()
  console.log(req.body.users)
})

serverRouter.get("/get", async (req, res) => {
  const tododetails = await serverMode.find()
  res.send(tododetails)
})

export default serverRouter
