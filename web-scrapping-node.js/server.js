const express = require('express');
const axios = require('axios');
const https = require('https');
const app = express();
const port = 3000;

// Criando um agente HTTPS que ignora a verificação de certificados
const agent = new https.Agent({
    rejectUnauthorized: false // Ignora a verificação de certificado
});

app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get('https://newpbot.com.br/?lastkills', {
            httpsAgent: agent,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5'
            }
        });

        const html = `
            <td class="centralizeContent" width="30">
                50.
            </td>
            <td width="125">
                <small>12.10.2024, 2:53:50</small>
            </td>
            <td>
                <a href="https://newpbot.com.br/?characters/Dragaobranco+Olhosaz">Dragaobranco Olhosaz</a> died at level <b>205</b> by a dragon lord.
            </td>
            `;

        // Criar um objeto DOM a partir da string HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extrair os valores desejados
        const smallValue = doc.querySelector('small').textContent;
        const linkValue = doc.querySelector('a').textContent;
        const bValue = doc.querySelector('b').textContent;

        // Montar a resposta com os valores extraídos
        const responseData = {
            small: smallValue,
            character: linkValue,
            level: bValue
        };

        // Enviar a resposta ao cliente
        res.json(responseData);
    } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
        if (error.response) {
            console.error('Dados da resposta:', error.response.data);
            console.error('Status da resposta:', error.response.status);
        }
        res.status(500).send('Erro ao buscar dados');
    }
});

app.listen(port, () => {
    console.log(`Proxy listening at http://localhost:${port}/proxy`);
});