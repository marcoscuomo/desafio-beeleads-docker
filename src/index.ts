import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('ola');
});

app.listen(3333, () => console.log('Server is running'));