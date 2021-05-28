const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')



  
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))


const port = 8080


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

var tarefas = ['Estudar', 'Trabalhar', 'Dormir', 'Acordar', 'Codar', 'Recomeçar']

//renderizar a pagina
app.get('/', (req, res) => {
    res.render('index', {tarefasList:tarefas})
})

//adicionar tarefas
app.post('/', (req, res) => {
    tarefas.push(req.body.adicionar)
    res.render('index', {tarefasList:tarefas})
    return
})



//deletar tarefas
app.get('/deletar/:id', (req, res) => {
    tarefas = tarefas.filter(function(val,index){
        if (index != req.params.id) {
            return val;
        }
    })
    res.render('index', {tarefasList:tarefas})
  })

 app.delete


app.listen(port, () => console.log(`Escutando a porta 8080`))

