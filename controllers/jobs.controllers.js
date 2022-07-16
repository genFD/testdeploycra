const db = require('../db/config');

const getjobs = async (req, res) => {
  const { rows } = await db.query('SELECT * FROM jobs');
  return res.status(200).json(rows);
};
module.exports = {getjobs}