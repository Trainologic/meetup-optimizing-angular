export interface Config {
  env: "dev"|"prod";
  port: number;
}

const config: Config = {
  env: 'dev',
  port: 3001,
};

export default config;
