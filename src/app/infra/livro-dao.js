//irá realizar todas as funcionalidas relacionadas ao banco de dados

class LivroDao {
    constructor(db) {
        this._db = db;
    }

    //Promise
    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros!');

                    return resolve(resultados);
                }
            )
        })
    }

    adiciona(livro){
        //Run() utilizado para executar instruções no bd que não retornam resultado
        return new Promise((resolve, reject) => {
            this._db.run(` 
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
                `, [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function (err) {
                    if (err){
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                }
            ) 
        });
    }
}

module.exports = LivroDao;