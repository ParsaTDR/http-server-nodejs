const { profile, reviews, items, watchList } = require('./API.js');
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
//If we are using ecmascript type instead of commonjs we don't have access to __dirname, so we can create it this way
/* const { dirname } = require('path');
const { fileURLToPath } = require('url');
const __dirname = dirname(fileURLToPath(import.meta.url)); */

http.createServer((request, response) => {
    const route = request.url.split('/');
    switch (request.url) {
        case '/':
            route.pop();
            const home = fs.readFileSync(path.join(__dirname, 'index.html'));
            response.write(home);
            break;
        case !'/favicon.ico':
            console.log(route);
            break;
        case '/items':
            const itemsPage = fs.readFileSync(path.join(__dirname, 'items.html'), 'utf-8');
            response.write(JSON.parse(JSON.stringify(itemsPage).replace('item1', items[0].title)));
            break;
        case '/profile':
            response.write(JSON.stringify(profile));
            break;
        case '/watchList':
            const ids = watchList.map((item) => item.id);
            const myWatchList = items
                .filter((list) => ids.includes(list.id))
                .map((it) => {
                    it.rating = watchList.find((watch) => watch.id == it.id).rating;
                    return it;
                });
            response.write(JSON.stringify(myWatchList));
            break;
        case '/reviews':
            response.write(JSON.stringify(reviews));
            break;
        case '/fileUpload/':
            //Here we create a folder to keep the uploaded files in
            if (!fs.existsSync(path.join(__dirname, 'NodeJs/restfulAPI.Project/uploads'))) {
                fs.mkdirSync('NodeJs/restfulAPI.Project/uploads', { recursive: true });
            }
            if (request.method == 'POST') {
                const form = new formidable.IncomingForm({
                    uploadDir: path.join(__dirname, '/uploads'),
                    keepExtensions: true,
                    multiples: true,
                    maxFileSize: 10 * 1024 * 1024,
                    allowEmptyFiles: false,
                });
                form.parse(request, function (err, fields, files) {});
            } else {
                const htmlFile = fs.readFileSync(path.join(__dirname, 'upload.html'), 'utf8');
                response.write(htmlFile);
            }
            console.log(request.method);
            break;
        default:
            response.write(
                JSON.stringify({
                    status: 404,
                    message: 'not found',
                }),
            );
            break;
    }
    response.end();
}).listen(2500, () => {
    console.log('http://localhost:2500');
});
