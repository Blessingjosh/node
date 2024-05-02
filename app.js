// const http = require('http')
// const server = http.createServer((req, res)=>{
//     console.log(req)
// res.write('Hello are you good')
// res.end()
// })
// server.listen(5000)

const http = require('http')
const server = http.createServer((req, res)=>{
if(req.url==='./'){
    res.end('Hello how are you')
}
if(req.url==='/about'){
    res.end('What is your name')
}
res.end(`
<h1>Ooops!!!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/about" >back home</a>
`)
})
server.listen(5000)