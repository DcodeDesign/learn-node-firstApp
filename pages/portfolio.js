const header = require('../templates/header')
const footer = require('../templates/footer')

let body = `<h1>Portfolio</h1>`

exports.page = (
    `${header.template} 
     ${body} 
     ${footer.template}`
)
