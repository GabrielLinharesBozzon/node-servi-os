import express from "express";

const app = express();
app.use(express.json())
  
const livros = [{id:1,
                "Titulo":"Senhor dos pasteis",
                "Data":1960,
                "Autor":"Beiçola"},
                {id:2,
                "Titulo":"Em busca de um pastel",
                "Data":1990,
                "Autor":"Jaspion"
            }]


app.get('/',(req,res)=>{
    res.status(200).send('Curso de node')
})                

app.get('/livros',(req,res)=>{
    res.status(200).json(livros)
})                


app.post('/livros',(req,res)=>{
    livros.push(req.body);
    res.status(201).send('O Livro foi cadastrado com sucesso')
})
export default app

