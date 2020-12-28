const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");
const Rabelas = require('./infraestrutura/tabelas')


conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Conectado com sucesso!");

        tabelas.init(conexao)
        const app = customExpress();

        app.listen(3000, () => console.log("Ouvindo na porta 3k"));
    }
});