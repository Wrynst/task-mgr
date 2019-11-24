require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dd77e092a4d7e2a7c7b29ed').then((task) => {
//   console.log(task)
//   return Task.countDocuments({completed:false})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async ( id ) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})
  return count
}

deleteTaskAndCount('5dd76f22a567977dd4135832').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})