import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
    {
        username: "doguinho",
        avatar: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2017/07/4-dicas-para-ter-fotos-perfeitas-do-seu-cachorro-pdd1.jpg?w=600&ssl=1"
    },
];

const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub",
    },
    {
        username: "doguinho",
        avatar: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2017/07/4-dicas-para-ter-fotos-perfeitas-do-seu-cachorro-pdd1.jpg?w=600&ssl=1",
        tweet: "auau!"
    },
];

app.post('/sign-up', (req, res) => {
    const user = req.body;
    if (user.username.length !== 0 && user.avatar.length !== 0) {
        users.push(user);
        res.status(201).send("ok");
    } else {
        res.status(400).send("Todos os campos são obrigatórios!");
    }
});

app.post('/tweets', (req, res) => {
    const tweet = {
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: users.find((user) => user.username === req.body.username).avatar,
    };
    if (tweet.username.length !== 0 && tweet.tweet.length !== 0) {
        tweets.push(tweet);
        res.status(201).send("ok");
    } else {
        res.status(400).send("Todos os campos são obrigatórios!");
    }
});

app.get('/tweets', (req, res) => {
    tweets.length <= 10 ? res.send(tweets) : res.send(tweets.slice(tweets.length - 10, tweets.length));
});

app.get('/tweets/:IdUser', (req, res) => {
    const user = req.params.IdUser;
    const tweetsUser = tweets.filter((tweet) => tweet.username === user);
    res.send(tweetsUser);
});

app.listen(5000, () => console.log(chalk.bold.magenta("Loading...")));