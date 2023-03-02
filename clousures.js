import crud from "./utilities.js"

let api = crud('https://jsonplaceholder.typicode.com')
let todos = api('/todos')
todos.get()
//todos.getId('1')

let posts = api('/posts')
posts.getId('3')

