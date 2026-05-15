const { Client } = require('pg');
const express = require('express');
const cors = require('cors');
const md5 = require('md5');
const axios = require('axios');
const server = express();

server.use(cors());
server.use(express.json());

const PORT = 3000;
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '3201',
    database: 'crm',
    port: 5432,
});

async function conectar() {
    try {
        await client.connect();
        console.log('Conectado ao PostgreSQL');

        const res = await client.query('select * from users');
        console.log('Hora do Servidor:', res.rows);
    } catch (err) {
        console.log('Erro na conexão:', err);
    }
}

server.get('/', (req, res) => {
    res.json('Servidor em Teste')
});

server.post('/users', async (req, res) => {
    const { username, password } = req.body;
    const response = await client.query(`
        INSERT INTO public.users(
        username, password)
        VALUES ('${username}', '${md5(password)}')
    `);
    console.log('sql: ', `
        INSERT INTO public.users(
        username, password)
        VALUES ('${username}', '${md5(password)}')
    `);
    res.json('Usuario Cadastrado');
});

server.get('/teste', async (req, res) => {
    const result = await axios.post('http://192.168.204.142:3000/alunos', {
        name: 'teste'
    });
    res.json(result.data)
    });

server.listen(PORT, () => {
    conectar();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});