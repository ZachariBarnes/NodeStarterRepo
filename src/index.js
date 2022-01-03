import got from 'got';
import express from 'express';
import logger from 'npmlog';
import dotenv from 'dotenv';

dotenv.config();

const myUrl = process.env.URL || 'http://localhost';
const port = process.env.PORT || 3333;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const testFunction = async () => {
  const { data } = await got.post('https://httpbin.org/anything', {
    json: {
      hello: 'world',
    },
  }).json();

  logger.info(data);
  //= > {"hello": "world"}
};
testFunction();

app.listen(port, () => logger.info(`App running at: ${myUrl}:${port}`));
