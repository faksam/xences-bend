import sequelizeConfig from '../config/config';
import { createModels } from '../models';

const db = async () => {
  const createDBModels = createModels(sequelizeConfig);
  await createDBModels.sequelize.sync(); // tells Sequelize to sync all defined models to db
  process.exit();
};

db();
