import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    {
        username: 'bobesponja',
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
];

const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub",
    },
];

app.post('/sign-up', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send('ok');
});

app.post('/tweets', (req, res) => {
    const tweet = {
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: users.find((user) => user.username === req.body.username).avatar,
    };
    tweets.push(tweet);
    res.send('ok');
});

app.get('/tweets', (req, res) => {
    tweets.length <= 10 ? res.send(tweets) : res.send(tweets.slice(tweets.length - 10, tweets.length));
});

app.listen(5000, () => console.log(chalk.bold.magenta("Loading...")));