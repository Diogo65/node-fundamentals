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
}

module.exports = LivroDao;