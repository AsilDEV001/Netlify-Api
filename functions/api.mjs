import express from 'express';
import serverless from 'serverless-http';

const ntlfy = express();
const port = 7777;

const data = [
    {
        name: "Asilbeck",
        hobby: {
            1: "Programming",
            2: "Gaming",
            3: "Basketball"
        }
    }
];

ntlfy.get('/about', (req, res) => {
    res.json(data);
});

ntlfy.get('/', (req, res) => {
    res.send("Welcome to Netlify!");
});

export const handler = serverless(ntlfy);

// ntlfy.listen(port, (req, res) => {
//     console.log(`Working on ${port}`);
// });