const knex = require("./config").knex // e esse config?
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/festa",require("./festa").router)
app.use("/convidado",require("./convidado").router)

knex.migrate.latest().then(_ => {
  app.listen(3000, _ => {
    console.log("server online")
  })
}) 