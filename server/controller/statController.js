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
      //   console.log("new user", resp);
    }
    res.locals.user = resp;
    // console.log(resp);
    return next();
  } catch (error) {
    return error;
  }
};

module.exports = statController;
