const os = require('os')

setInterval(() => {
    const freemem = os.freemem
    const totalmem = os.totalmem

    const mem = parseInt((freemem() / 1024 / 1024))
    const total = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)


    const stats = {
        freemem: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    console.clear()
    console.log("======>Status memoria<========")
    console.table(stats)
}, 2000)
