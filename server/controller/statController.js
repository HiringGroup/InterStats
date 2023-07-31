const statController = {};
const db = require("../db.js");

statController.initialFetch = async (req, res, next) => {
  try {
    let userid = req.params.id;
    console.log("params", userid);
    let query = `SELECT * FROM Users where username=$1`;
    let param = [userid];
    const respo = await db.query(query, param);
    const resp = respo.rows[0];
    if (respo.rows.length === 0) {
      console.log("empty");
      let insertQuery = `INSERT INTO Users (username,sent, phoneInter, interview, offer,rejections, noReply) VALUES($1,0,0,0,0,0,0)`;
      resp = await db.query(insertQuery, param);
      console.log("new user", resp);
    }
    res.locals.user = resp;
    console.log(resp);
    return next();
  } catch (error) {
    return error;
  }
};

statController.joinGroup = async (req, res, next) => {
  const { userid, groupid } = req.body;
  const values = [ userid, groupid ];
  const join = `INSERT INTO groups (userid, groupid) VALUES($1, $2)`;
  try {
    await db.query(join, values);
    return next();
  } catch (err) {
    return err;
  }
};

statController.getGroups = async (req, res, next ) => {
  const id = req.params.id;
  try {
    const values = [id];
    const getAllGroups = `SELECT * FROM USERS U INNER JOIN GROUPS G ON U.ID = G.ID WHERE u.ID = $1`
    const groups = await db.query(getAllGroups, values);
    res.locals.groups = groups.rows;
    next();
  } catch (err){
    return err;
  }
}

module.exports = statController;
