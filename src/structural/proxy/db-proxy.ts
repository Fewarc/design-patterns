type UserRole = "admin" | "default";

interface User {
  name: string;
  role: UserRole;
}

class DBConnection {
  constructor(username: string, role?: UserRole) {
    this.user = { name: username, role: role ?? "default" };
  }

  user: User;
}

interface Database {
  connection: DBConnection;
  _data: string;
  set data(data: string);
  get data(): string;
}

export class DatabaseService implements Database {
  constructor(username: string, role?: UserRole) {
    this.connection = new DBConnection(username, role);
  }

  connection: DBConnection;
  _data: string = "";
  set data(data: string) {
    this._data = data;
  }
  get data(): string {
    return this._data;
  }
}

export class DatabaseProxy implements Database {
  constructor(db: Database) {
    this.db = db;
    this.connection = db.connection;
    this._data = db._data;
  }

  db: Database;
  connection: DBConnection;
  _data: string;

  private authorizeAccess() {
    if (this.connection.user.role === "admin") {
      return true;
    } else return false;
  }

  set data(data: string) {
    if (this.authorizeAccess()) {
      this.db.data = data;
    }
  }

  get data(): string {
    if (this.authorizeAccess()) {
      return this.db._data;
    } else {
      return "Unauthorized";
    }
  }
}
