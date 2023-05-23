var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.redirect('./index.html');
});

app.use(express.static(__dirname));
app.use(express.static('dist'));

app.listen(3000, () => {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
