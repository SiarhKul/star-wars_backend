import express from 'express';
import chalk from 'chalk';
import config from 'config';
import serverRoutes from './routes/resources.js';
import { connectMongoose } from './mongoDB/connectDB.js';

const PORT = process.env.PORT || config.get('port');

(async () => {
  await connectMongoose();
})();

const app = express();

app.use(express.json());
app.use(serverRoutes);

app.listen(PORT, () => {
  console.log(chalk.bgWhiteBright(`listening on port ${PORT}`));
});
