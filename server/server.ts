/// <reference path="../typings/main.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import { router } from './routes';

let app = express();
let pathToNgPublic = __dirname + '/../ng-public';
let pathToNg2Public = __dirname + '/../ng2-public';
let pathToNgUpgradePublic = __dirname + '/../ng-upgrade-public';


app.use(bodyParser.json());
app.use(cors());


app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/common-assets', express.static(__dirname + '/../common-assets'));

app.use('/ng-app', express.static(pathToNgPublic + '/app'));
app.use('/ng2-example/ng2-app', express.static(pathToNg2Public + '/app'));
app.use('/ng2-app', express.static(pathToNg2Public + '/app'));
app.use('/ng-upgrade-app', express.static(pathToNgUpgradePublic + '/app'));


router(app);


app.all('/ng-example*', (req, res) => {
	res.sendFile('index.html', {root: pathToNgPublic});
});
app.all('/ng2-example*', (req, res) => {
	res.sendFile('index.html', {root: pathToNg2Public});
});
app.all('/ng-upgrade-example*', (req, res) => {
	res.sendFile('index.html', {root: pathToNgUpgradePublic});
});
app.all('/*', (req, res) => {
	res.sendFile('landing.html', {root: __dirname + '/..'});
});


app.listen('8787', function listener() {
	console.log('Express app listening at "http://localhost:8787/"');
});