import express from 'express'
import fs from 'fs'
import postcss from 'postcss'
import postcssConfig from './postcss.config.js'

const app = express()
const port = 3000

// app.use(express.static('.'))
app.get('/', (req, res) => {
  const content = fs.readFileSync('index.html')
  // console.log(content.toString())
  res.status(200).set('Content-Type', 'text/html').end(content)
})

app.get('*.css$', async (req, res) => {
  // console.log('css req', req.url, req.originalUrl)
  const content = fs.readFileSync(req.url.slice(1))
  const result = await postcss(postcssConfig).process(content, {
    from: req.url.slice(1),
    to: undefined,
  })
  res.status(200).set('Content-Type', 'text/css').end(result.css)
})

app.get('*.js$', (req, res) => {
  const content = fs.readFileSync(req.url.slice(1))
  res.status(200).set('Content-Type', 'application/javascript').end(content)
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
