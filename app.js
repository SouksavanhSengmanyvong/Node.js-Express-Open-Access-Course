const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get("/", (reg,res) =>{

res.send('Hello borntodev Co., Ltd.');

})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.red(" : "+port));
})