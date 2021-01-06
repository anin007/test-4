const express = require ('express');
const app = express()

//Request handle

app.get('/',function(request,response){
    response.send("<h3>hello world <a href='/about'>about</a></h3>")
    


})


app.get('/about',function(request,response){
    response.send("<h4>you are in about page <a href='/'>home</a></h4>")

})

app.listen(5000,console.log('server runing on port 5000'))