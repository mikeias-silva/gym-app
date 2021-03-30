const http = require('http')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')
const URL = require('url')


function writeFile(cb) {
    return fs.writeFile(
        path.join(__dirname, "urls.json"),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err
            cb(JSON.stringify({ message: "ok" }))
        }
    )
}


http.createServer((req, res) => {

    //console.log(URL.parse(req.url, true).query)

    const { name, url, del } = URL.parse(req.url, true).query

    // all resources
    if (!name || !url)
        return res.end(JSON.stringify(data))

    //  return res.end("show all")
    if (del) {

        data.urls = data.urls.filter(item => String(item.url) !== String(url))
        return writeFile((message =>
            res.end(message)
        ))

    }


    data.urls.push({name, url})

    return writeFile((message) => res.end(message))


}).listen(3000, () => console.log('server 3000 ta on'))