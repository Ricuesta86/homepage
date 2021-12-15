const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let data = {
            nombre: 'Roberto',
            user: 'Ricuesta',
            url: req.url
        }
        // res.write('Hola mundo');
    res.write(JSON.stringify(data));
    res.end();

}).listen(8080);
console.log(`El servidor esta corriendo por el puerto: 8080`);