const url = require('url')
const qs = require("querystring")
const configs = require("./configs")

// pages 
home = require("./pages/home")
contact = require("./pages/contact")
portfolio = require("./pages/portfolio")
forum = require("./pages/forum")

let pages = [
    { path:  "/" , component: home.page },
    { path:  "/contact" , component: contact.page },
    { path:  "/portfolio" , component: portfolio.page },
    { path:  "/forum" , component: forum.page }
]

exports.dispatch = (req, res) => {
    let path = configs.path(req)
    // let params = configs.params(req)
    for(let i = 0; i < pages.length; i++){
        if (pages[i].path == path) {
            res.write(pages[i].component )
        }
    }
}


