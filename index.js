const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const linesRouter = require('./routes/lines');
const stationsRouter = require('./routes/stations');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/lines', linesRouter);

app.use('/stations', stationsRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
