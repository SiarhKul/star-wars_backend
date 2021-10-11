import mongoose from 'mongoose';
import chalk from 'chalk';

const db = 'mongodb+srv://root:1qaz2WSX@rootclaster.dtprv.mongodb.net/sw?retryWrites=true&w=majority';

export const connectMongoose = async () => mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(chalk.blue.bgGreenBright('Database has been connected...'));
  })
  .catch((error) => {
    console.log(chalk.bgRedBright(error));
  });
