class Database {
  private static instance: Database;

  private data: string = "Fake database";

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  getData(): string {
    return this.data;
  }

  setData(value: string): void {
    this.data = value;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.setData("PostgreSQL connected");
console.log("db2 ma'lumoti:", db2.getData());
console.log(db1 === db2);


export default Database.getInstance();