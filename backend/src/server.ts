import express from 'express'
import path from 'path'
import routes from './routes'
import cors from 'cors'

var port = process.env.PORT || 3333;

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(port, () => {
  console.log('Backend Started...')
})