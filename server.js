import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

const app = express();
app.use(express.json());

const serverPort = 3001;

app.get("/", (req, res) => {
    res.send("O servidor está funcionando");
});

app.get("/bruxos", (req, res) => {
    if (bruxos.length > 0) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado!"
        });
    }
});

app.get("/casas", (req, res) => {
    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma casa encontrada!"
        });
    }
});

app.get("/varinhas", (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma varinha encontrada!"
        });
    }
});

app.get("/animais", (req, res) => {
    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado!"
        });
    }
});

app.get("/pocoes", (req, res) => {
    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Nenhuma poção encontrada!"
        });
    }
});

app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);

    if (bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "Bruxo(a) não encontrado!"
        });
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome;
    nome = nome.toLowerCase();

    const nomesFiltrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if (nomesFiltrados.length > 0) {
        res.status(200).json(nomesFiltrados);
    } else {
        res.status(404).json({
            mensagem: "Bruxo(a) não encontrado com esse nome!"
        });
    }
});

app.listen(serverPort, () => {
    console.log(`Servidor rodando na porta ${serverPort}...`);
});
