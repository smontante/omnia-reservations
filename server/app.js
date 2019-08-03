require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const Lead = require('../models/lead')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/reservation', (req, res)=> {
    const reservation = new Reservation(req.body);
    console.log('reservation:', req.body)

    lead.save().then(()=> {
        res.status(201).send(reservation)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

app.listen(port, ()=> {
    console.log('listening on port ', port)
})



