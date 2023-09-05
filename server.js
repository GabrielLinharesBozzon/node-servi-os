import app from './src/app.js'; 
const port =process.env.port|| 8080;

app.listen(port,()=>{
    console.log(`Servidor Escutando em http://localhost:${port}`)
})

