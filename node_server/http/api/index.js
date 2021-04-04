const http = require('http')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')
const URL = require('url')





http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    })

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


    data.urls.push({ name, url })

    return writeFile((message) => res.end(message))


}).listen(5001, () => console.log('server 3000 ta on'))

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