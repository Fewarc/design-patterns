export class Database {
  constructor(message: string) {
    this.dbMessage = message;
  }

  private static db: Database;
  public dbMessage: string;

  public static getInstance(message: string = "db message") {
    if (!Database.db) {
      Database.db = new Database(message);
    }

    return Database.db;
  }
}
