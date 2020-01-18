const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

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
        
        const livroDao = new LivroDao(db);
        //promisses
        livroDao.lista()
            .then(livros => resp.marko(  //essa função habilitada, permita que possamos buscar templates com a extrensão .marko
                require('../views/livros/lista/lista.marko'), //method require é usado para importar
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
            
        // livroDao.lista(function(erro, resultados){

        //     resp.marko(  //essa função habilitada, permita que possamos buscar templates com a extrensão .marko
        //         require('../views/livros/lista/lista.marko'), //method require é usado para importar
        //         {
        //             livros: resultados
        //         }
        //     );
        // });

        // db.all('SELECT * FROM livros', function(erro, resultado){

        //     resp.marko(  //essa função habilitada, permita que possamos buscar templates com a extrensão .marko
        //         require('../views/livros/lista/lista.marko'), //method require é usado para importar
        //         {
        //             livros: resultado
        //         }
        //     );
        // });
    });
}; 

