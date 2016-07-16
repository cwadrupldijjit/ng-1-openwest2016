import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as mongoose from 'mongoose';

import { router } from './routes';

let app = express();
let pathToNgPublic = __dirname + '/../ng-public';
let pathToNg2Public = __dirname + '/../ng2-public';
let pathToNgUpgradePublic = __dirname + '/../ng-upgrade-public';


app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
	if (req.is('text/*')) {
		req['text'] = '';
		req.setEncoding('utf8');
		req.on('data', function(chunk){ req['text'] += chunk });
		req.on('end', next);
	} else {
		next();
	}
});


app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/common-assets', express.static(__dirname + '/../common-assets'));

app.use('/ng-app', express.static(pathToNgPublic + '/app'));
app.use('/ng2-example/ng2-app', express.static(pathToNg2Public + '/app'));
app.use('/ng2-app', express.static(pathToNg2Public + '/app'));
app.use('/ng2-system-config.js', (req, res) => {
	res.sendFile('system.config.js', {root: __dirname + '/../ng2-public'});
});
app.use('/ng-upgrade-app', express.static(pathToNgUpgradePublic + '/app'));
app.use('/ng-upgrade-system-config.js', (req, res) => {
	res.sendFile('system.config.js', {root: __dirname + '/../ng-upgrade-public'});
});


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

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/ng-upgrade-profiles');
mongoose.connection.once('open', () => {
	console.log('Mongoose connected to ng-upgrade-profiles db at "localhost:27017"');
});

app.listen('8787', function listener() {
	console.log('Express app listening at "http://localhost:8787/"');
});

export { mongoose };