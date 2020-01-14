module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send(
            `
            <html>
                <head>
                    <meta charset="uft-8" />
                </head>
                <body>
                    <h1>Hello World</h1>
                </body>
            </html>
            `
        )
    });
    
    app.get('/livros', function(req, resp) {
        resp.marko(  //essa função habilitada, permita que possamos buscar templates com a extrensão .marko
            require('../views/livros/lista/lista.marko'), //method require é usado para importar
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    }
                ]
            }
        )
    });
} 

