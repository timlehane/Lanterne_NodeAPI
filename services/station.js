const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/* async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, property1, property2 FROM Stations LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
 */
async function getById(id){
  const rows = await db.query(
      `SELECT * FROM LinesTable WHERE fId=?`,[id]
  );
  const data = helper.emptyOrRows(rows);

  return {
      data
  }
}

module.exports = {
  getById
}
