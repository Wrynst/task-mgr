// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const{MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id)

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if(error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Nate',
  //   age: 39
  // }, (error, result) => {
  //   if(error){
  //     return console.log('Unable to insert user')
  //   }
  //   console.log(result.ops)
  // })
  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   }, {
  //     name: 'Emily',
  //     age: 31
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('unable to insert Docs!')
  //   }
  // console.log(result.ops)

  // })
  db.collection('tasks').insertMany([
    {
      description: 'Get milk',
      completeded: true
    },
    {
      description: 'Clean Dominique',
      completeded: false
    },
    {
      description: 'Eat Stars',
      completeded: true
    }
  ], (error, result) => {
    if(error) {
      return console.log('unable to insert documents!')
    }
    return console.log(result.ops)
  }
  )
})