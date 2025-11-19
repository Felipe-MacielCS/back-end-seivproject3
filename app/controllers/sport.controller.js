import db from "../models/index.js";
const Sport = db.sport;
const Op = db.Sequelize.Op;

const exports = {};


exports.create = (req, res) => {
  if (!req.body.name || !req.body.athleteID) {
    res.status(400).send({
      message: "Name and Athlete ID cannot be empty!"
    });
    return;
  }

  const sport = {
    name: req.body.name,
    athleteID: req.body.athleteID
  };

  Sport.create(sport)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Sport."
      })
    );
};


exports.findAll = (req, res) => {
  const athleteID = req.query.athleteID;

  let condition = null;
  if (athleteID) {
    condition = { athleteID: athleteID };
  }

  Sport.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving sports."
      })
    );
};


exports.findOne = (req, res) => {
  const sportID = req.params.id;

  Sport.findByPk(sportID)
    .then((data) => {
      if (data) res.send(data);
      else {
        res.status(404).send({
          message: `Cannot find Sport with sportID=${sportID}.`
        });
      }
    })
    .catch((err) =>
      res.status(500).send({
        message: "Error retrieving Sport with sportID=" + sportID
      })
    );
};


exports.update = (req, res) => {
  const sportID = req.params.id;

  Sport.update(req.body, { where: { sportID: sportID } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Sport updated successfully." });
      } else {
        res.send({
          message: `Cannot update Sport with sportID=${sportID}. Maybe it was not found or request body is empty!`
        });
      }
    })
    .catch((err) =>
      res.status(500).send({
        message: "Error updating Sport with sportID=" + sportID
      })
    );
};


exports.delete = (req, res) => {
  const sportID = req.params.id;

  Sport.destroy({ where: { sportID: sportID } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Sport deleted successfully!" });
      } else {
        res.send({
          message: `Cannot delete Sport with sportID=${sportID}. Maybe it was not found!`
        });
      }
    })
    .catch((err) =>
      res.status(500).send({
        message: "Could not delete Sport with sportID=" + sportID
      })
    );
};

export default exports;
