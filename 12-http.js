const https = require("http");

const server = https.createServer((req,res) => {
    if(req.url === '/') {
        res.end("Welcome my home page!");
    }
    if(req.url === "/about") {
        res.end("Here is the About part of the page");
    }
    res.end(`
        <h1>Oops!</h1>
    <p>We can not see that page you trying to open!</p>
    <a href="/">Back Home</a>
    `)
});

server.listen(5000);
