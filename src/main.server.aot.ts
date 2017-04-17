/**
 * This file should be temporary
 * See https://github.com/angular/angular-cli/pull/5194
 */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as compression from 'compression';
import * as request from 'request';
import {platformServer, renderModuleFactory} from '@angular/platform-server';
import {ServerAppModuleNgFactory} from './ngfactory/app/server-app.module.ngfactory';
import {ngExpressEngine} from './modules/ng-express-engine/express-engine';
import {ROUTES} from './routes';
import {enableProdMode} from '@angular/core';

enableProdMode();

const app = express();
const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
    aot: true,
    bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use(compression({
    level: 8
}));

app.use('/', express.static('dist', {index: false}));

ROUTES.forEach(route => {
    console.log('registered', route);
    app.get(route, (req, res) => {
        console.time(`GET: ${req.originalUrl}`);
        res.render('../dist/index', {
            req: req,
            res: res
        });
        console.timeEnd(`GET: ${req.originalUrl}`);
    });
});

app.get('/api/location', (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    request({
            method: 'GET',
            uri: `https://xmlopen.rejseplanen.dk/bin/rest.exe/location`,
            qs: req.query
        })
        .on('response', (response) => {
            console.timeEnd(`GET: ${req.originalUrl}`);
        })
        .pipe(res);
});
app.get('/api/departureBoard', (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    request({
        method: 'GET',
        uri: `https://xmlopen.rejseplanen.dk/bin/rest.exe/departureBoard`,
        qs: req.query
    })
        .on('response', (response) => {
            console.timeEnd(`GET: ${req.originalUrl}`);
        })
        .pipe(res);
});

app.listen(port, () => {
    console.log(`Listening at ${baseUrl} on port ${port}`);
});
