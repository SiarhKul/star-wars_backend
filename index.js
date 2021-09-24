import express from 'express';
import chalk from 'chalk';
import serverRoutes from './routes/resources.js';

const app = express();

const PORT = 4000;

app.use(serverRoutes);

app.listen(PORT, () => {
	console.log(
		chalk.bgKeyword('green')(
			'------------------------------------------listening on port 4000'
		)
	);
});
