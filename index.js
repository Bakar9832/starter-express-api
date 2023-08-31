const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());

app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const response = axios.put('https://api.chatengine.io/users/', { username: username, secret: username, first_name: username },
            { headers: { 'private-key': "afdf7bae-f7d6-4732-8d2b-e1a6d27ecbec" } });
        return res.status((await response).status).json((await response).data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
})

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
    console.log("server is listening on port: ", PORT);
})
