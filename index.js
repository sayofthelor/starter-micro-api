import http from 'http';
import { ChatGPTAPI } from 'chatgpt';

const port = process.env.PORT || 3000;
const gpt = new ChatGPTAPI({
    apiKey: process.env.OPENAIKEY
});

const server = http.createServer(async (req, res) => {
    req.on('data', async (data) => {
        const message = data.toString();
        console.log(message);
        const response = await gpt.sendMessage(message);
        console.log(response);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(response);
    });
});

server.listen(port, () => console.log(`Server running on port ${port}`));