const mysql = require('mysql2');
const express = require('express');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tanamedida'
});
btnEntrar.addEventListener("click", function () {
    body.className = "btn-cadastro";


app.post('/Login', (req, res) => {
    const { username, password } = req.body;
    // Verificar se os campos não estão vazios
    if (!username || !password) {
        return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios' });
    }

    const query = "SELECT  Senha FROM usuarios WHERE Email = ?";
    db.execute(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erro no servidor' });
        }

        if (results.length > 0) {
            const user = results[0]; // Pegando o usuário retornado no banco

            // Comparar a senha usando bcrypt
            bcrypt.compare(password, user.Senha, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Erro ao comparar a senha' });
                }
            });
        } else {
            res.status(401).json({ message: 'Usuário não encontrado' });
        }
    });
});
})