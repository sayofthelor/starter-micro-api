import http from 'http';
import { ChatGPTAPI } from 'chatgpt';

const port = process.env.PORT || 3000;
const gpt = new ChatGPTAPI({
    apiKey: process.env.OPENAIKEY
});

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    req.on('data', async (data) => {
        const message = data.toString();
        console.log(message);
        const response = await gpt.sendMessage(message);
        console.log(response);
        res.end(JSON.stringify(response));
    });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
