import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Level2 Assignment-2 app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
