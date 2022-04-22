import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const users = [
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
];

app.post('/sign-up', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send('ok');
});


app.listen(5000);