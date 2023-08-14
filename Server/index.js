require('dotenv').config()
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const userRouter = require('./Routes/todo')
const { connectMongoDb } = require('./connection')
const cors = require('cors')


// Connection
connectMongoDb(process.env.MONGO_URL)
  .then(() => {
    console.log('db connected')
  })
  .catch((err) => console.log('err - ', err))

  server.use(cors());
// middleware - Plugin
server.use(
  cors({
    origin: '',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  }),
)

server.use(express.urlencoded({ extended: false }))

// serer.use(express.json()) || server.use(bodyParser.json())

server.use(bodyParser.json())

// Routes

server.use('/api/todo', userRouter)
server.get('/', (req, res) => res.send('server connected'))

server.listen(process.env.PORT, () => {
  console.log('server running')
})
