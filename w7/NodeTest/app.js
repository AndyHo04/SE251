const express = require('express');
const app = express();
const fs= require('fs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`/people`, (req, res) => {
    res.sendFile(`${__dirname}/stuff.json`);
});

app.post (`/form`, async(req, res) => {
    let jsonString = JSON.stringify(req.body);
    await fs.writeFile(`${__dirname}/peeps.json`, jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
});

app.listen(3000, (e) => {
    console.log('Server is running on port 3000');
    
});

/*
const hbs = require('hbs');//this was suppose get the name form that you inserted in the bar and paste it on the page ex.Andy's Page (Andy was the name you put in the bar), there was more to this.
hbs.registerPartials(`${__dirname}/views/partials`, function (err) {});
app.set('view engine', 'hbs');

 
app.get("/", (req, res) => 
{
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/starbucks", (req, res) => 
{
    res.sendFile(`${__dirname}/stuff.json`);
});

app.get("/test/:age/:name", (req, res) => 
{
    res.send(req.params);
});

app.get("/test", (req, res) => 
{
    res.send(req.query);
});

*/

