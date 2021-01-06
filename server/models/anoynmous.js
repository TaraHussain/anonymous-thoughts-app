const db = require("../db/config");
const SQL = require("sql-template-strings");

// const Anonymous = require("./");

class Anonymous {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.pseudonym = data.pseudonym;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const anonymousData = await db.run(SQL`SELECT * FROM anonymousposts ;`);
        const anoynmous = anonymousData.rows.map((d) => new anonymous(d));
        resolve(anonymous);
      } catch (err) {
        reject("Error retrieving data");
      }
    });
  }
  // static findBytitle (title) {
  //     return new Promise (async (resolve, reject) => {
  //         try {
  //             let anoynmousData = await db.run(SQL`SELECT * FROM anonymousposts  WHERE title = ${title};`);
  //             let anonynmous = new anoynmous(anoynmousData.rows[0]);
  //             resolve (anoynmous);
  //         } catch (err) {
  //             reject(' not found');
  //         }
  //     });

  // }
  static create(title, pseudonym, body) {
    return new Promise(async (resolve, reject) => {
      try {
        let anoynmousData = await db.run(
          SQL`INSERT INTO anonymousposts  (title,pseudonym,body) VALUES (${title}, ${pseudonym},${body}) RETURNING *;`
        );
        let newAnoynmous = new Anoynmous(anoynmousData.rows[0]);
        resolve(newAnoynmous);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        await db.run(
          SQL`DELETE FROM anonymousposts  WHERE title = ${this.id};`
        );
        resolve("post was deleted");
      } catch (err) {
        reject("post could not be deleted");
      }
    });
  }
}
module.exports = Anonymous;
