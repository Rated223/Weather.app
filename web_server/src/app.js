const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath)); // this routes gonna have priority

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Andrew Mead'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Andrew Mead'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is a help text gueguegue',
    name: 'Andrew Mead'
  });
});

app.get('/weather', (req, res) => {
  res.send('weather page');
})

app.listen(3006, () => {
  console.log('server running in port 3006');
})

