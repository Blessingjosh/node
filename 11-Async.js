const {readFile, writeFile}  = require('fs')
readFile('./content/first.txt', 'utf8', (err, result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result)=> {
   if(err){
    console.log(err)
    return
   }
   const second = result
   writeFile('./content/fourthAsyn.txt', `Are you sure ${first} and ${second}`, {flag:'a'}, (err, result)=>{
    if(err){
      console.log(err)
      return
    }
    console.log(result)
   })
  })
})