import express from 'express';
import chalk from 'chalk';

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
	console.log(chalk.bgKeyword('green')('listening on port 4000'));
});
