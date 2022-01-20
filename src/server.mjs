import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import { AnalyseService } from './analyse.service.mjs'

const app = express()
const port = process.env.PORT || 8080
const analyseService = new AnalyseService()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/analyse', (req, res) => {
  if (req.body && req.body.siteUrl) {
    const { siteUrl } = req.body
    analyseService.analyseUrl(siteUrl).then(entry => {
      res.send({
        success: true,
        entry
      })
    }).catch(err => {
      res.status(502).send(err)
    })
  } else {
    res.sendStatus(400)
  }
})

console.log(path.resolve('public'))

app.use('/', express.static(path.resolve('public')))

export function launch () {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}
