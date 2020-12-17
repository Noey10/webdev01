const http = require('http');

http.createServer((req,res) => {
    console.log('request มาอีกแล้ว');
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(`
        <html>
            <head>
            </head>
            <body>
                <h1>
                    Hello Sin
                </h1>
            </body>
        </html>
        `);
    res.end();
}).listen(80);
console.log('one');
console.log('two');
console.log('three');