declare module "config" {
  export interface IDatabase {
    test: string | undefined;
    dev: string | undefined;
  }

  export interface IConfig {
    env: string | undefined;
    port: string | number;
    db: IDatabase;
  }
}
