const db = require('../db/config');

const { StatusCodes } = require('http-status-codes');

const getDevjobs = async (req, res) => {
  const { rows } = await db.query('SELECT * FROM jobs');
  res.status(StatusCodes.OK).json(rows);
};

const getSinglejob = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const query = {
    text: 'SELECT * FROM jobs WHERE id = $1',
    values: [id],
  };
  const { rows } = await db.query(query);
  res.status(StatusCodes.OK).json(rows);
};

const filterByLocation = async (req, res) => {
  const { location } = req.query;
  const query = {
    text: "SELECT * FROM jobs WHERE content ->> 'location' ILIKE $1",
    values: [`%${location}%`],
  };
  const { rows } = await db.query(query);
  res.status(StatusCodes.OK).json(rows);
};

const filterByContract = async (req, res) => {
  const { contract } = req.query;
  const query = {
    text: "SELECT * FROM jobs WHERE content ->> 'contract' ILIKE $1",
    values: [`%${contract}%`],
  };
  const { rows } = await db.query(query);
  res.status(StatusCodes.OK).json(rows);
};

const filterDevjobs = async (req, res) => {
  const { company, position, expertise } = req.query;
  const query = {
    text: "SELECT * FROM jobs WHERE content ->> 'company' ILIKE $1 OR content ->> 'position' ILIKE $2 OR content -> 'requirements' ->> 'items' ILIKE $3",
    values: [`%${company}%`, `%${position}%`, `%${expertise}%`],
  };
  const { rows } = await db.query(query);
  res.status(StatusCodes.OK).json(rows);
};

module.exports = {
  getDevjobs,
  filterDevjobs,
  filterByLocation,
  filterByContract,
  getSinglejob,
};
