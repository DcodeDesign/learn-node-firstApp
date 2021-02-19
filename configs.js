const url = require('url')
const qs = require("querystring")

exports.path = (req)  => {
    return url.parse(req.url).pathname
}

exports.params = (req)  => { 
    return qs.parse(url.parse(req.url).query)
}