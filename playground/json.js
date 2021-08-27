const fs = require('fs')
const book = {
    title: 'ego is enemy',
    author: 'ryan'
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync('json.json',bookJSON)

const dataBuffer = fs.readFileSync('json.json')

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title, ' ' , data.author)

