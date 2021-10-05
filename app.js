import express from 'express';
import chalk from 'chalk';
import serverRoutes from './routes/resources.js';
import { connectMongoose } from './mongoDB/connectDB.js';
import config from 'config';

const PORT = process.env.PORT || config.get('port');

await connectMongoose();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(serverRoutes);

app.listen(PORT, () => {
	console.log(chalk.bgWhiteBright(`listening on port ${PORT}`));
});
