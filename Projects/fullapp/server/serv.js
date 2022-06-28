const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser= require('body-parser')
app.use(express.static('public'))
app.set('view engine', 'ejs')

const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb+srv://TaskTracker2022:U3Vb15iQQSO1Gmyc@tasktracker1.wxmscgr.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true})
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('task-tracker')
    const taskCollection = db.collection('tasks')

    app.get('/', (req, res) => {
        db.collection('tasks').find().toArray()
          .then(results => {
            res.render('index.ejs', { tasks : results })
          })
          .catch(error => console.error(error))
      })


    app.post('/tasks', (req, res) => {
        taskCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
    })
})  
.catch(error => console.errror(error))
 
 
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function() {
    console.log('listening on 3000')
  })



//   app.get('/', (req, res) => {
//     db.collection('tasks').find()
//     .then(results => {
//         console.log(results)
// })})