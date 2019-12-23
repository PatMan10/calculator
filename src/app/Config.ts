class Config {
  readonly env: string;
  readonly logLevel: number;

  constructor() {
    this.env = "development";
    this.logLevel = 3;
  }
}

export default new Config();
