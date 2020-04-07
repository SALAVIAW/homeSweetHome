//Usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque voluptatem placeat sint praesentium odio, beatae cumque aliquam ipsa",
        url: "http://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercício em casa",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque voluptatem placeat sint praesentium odio, beatae cumque aliquam ipsa",
        url: "http://rocketseat.com.br", 
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque voluptatem placeat sint praesentium odio, beatae cumque aliquam ipsa",
        url: "http://rocketseat.com.br",  
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque voluptatem placeat sint praesentium odio, beatae cumque aliquam ipsa",
        url: "http://rocketseat.com.br",    
    },
]



//Configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //bollean
})


// configurar aquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))



//criei uma rota /
//capturar pedido do cliente e responeder
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
          
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideas.html", { ideas: reversedIdeas})
})


//liguei meu servidor na porta 3000
server.listen(3000)