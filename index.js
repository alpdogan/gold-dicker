const express = require('express')


const path = require('path');
var morgan = require('morgan')
var apicache = require('apicache')
var cache = apicache.middleware

const app = express()


const port = process.env.PORT || 5000;
const hodlFetcher = require('./tokenholdings');
const txFetcher = require('./transactiondetails');


app.use(morgan(":method :url :status :response-time ms - :res[content-length]"));
app.use(express.static(path.join(__dirname, './client-app/build')));
app.use(cache('30 minutes'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client-app/build/index.html'));
})

app.get('/txtrack/:tx', (req, res) => {
    res.sendFile(path.join(__dirname + '/client-app/build/index.html'));
})

app.get('/wlttrack/:wallet', (req, res) => {
    res.sendFile(path.join(__dirname + '/client-app/build/index.html'));
})


app.get('/api/tokenholdings/:contract', async (req, res) => {
    const { contract } = req.params;
    var result = await hodlFetcher(contract);
    res.send(result);
})


app.get('/api/tx/:tx', async (req, res) => {
    const { tx } = req.params;
    var result = await txFetcher(tx);
    res.send({
        contractToken: result
    });
})

app.get('/api/txWallet/:tx', async (req, res) => {
    const { tx } = req.params;
    var wallet = await txFetcher(tx);
    res.redirect(`/api/tokenholdings/${wallet}`);
})
  
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})