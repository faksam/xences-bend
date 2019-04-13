export interface EnvParams {
  host: string;
  dialect: string;
  operatorsAliases: boolean;
  [key: string]: any;
}

export interface ConfigEnv {
  database: string;
  username: string;
  password: string;
  params: EnvParams;
}
