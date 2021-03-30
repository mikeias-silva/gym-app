const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req, res) =>{
    const file = req.url ==='/' ? 'index.html' : req.url

    console.log(file)
    
    
    // if(req.url === '/' ){
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if(err) throw err

    //             res.end(content)
    //         }
    //     )
    // }
}).listen(5000, () => console.log('Servidor ta on'))