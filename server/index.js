require('dotenv').config(); // ADD .env
const ctrl = require('./controller'),
	express = require('express'),
	massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING)
	.then(res => {
		app.set('db', res);
	})
	.catch(err => console.log(err));

// EndPoints
app.post('/api/products', ctrl.create);
app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.delete('/api/products/:id', ctrl.delete);
app.put('/api/products/:id', ctrl.update);

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}.`));
