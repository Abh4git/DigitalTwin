const db = require("../models");
const StateModel = db.StateModel;
const mongoose = require("mongoose");

/* Collect State Information based on Id */
exports.getStateInformation = (req, res) => {
  StateModel.findById(req.params.id)
    .exec((err, stateInfo) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!stateInfo) {
        return res.status(404).send({ message: "State Info Not found." });
      }

      res.status(200).json({stateInfo});
    });
};


/* Create StateModel Information */
exports.createStateModel=  (req, res) => {
console.log("Create StateModel Information")
let { title, description, statecontainer } = req.body
let _id = mongoose.Types.ObjectId();
let newStateModel = new StateModel({
   _id,
  name,
   description,
  statecontainer
});
newStateModel.save((err, newStateModelUpdated) => {
  if (err) return res.status(500).send({ message: err });
  res.status(200).json({newStateModelUpdated});
})
};

/*Update the State*/
exports.updateStateInfo = (req, res) => {
  console.log("Updating StateModel")
  let {id} = req.params;
  let { title, description, inputs, outputs } = req.body
  StateModel.findById(id, (err, currentstate) => {
    if (err) return res.status(500).send({message: err})
    if (!configuration) return res.status(404).send({ message: "Configuration Not found." })
      currentstate.name=name;
      currentstate.description=description;
      currentstate.statecontainer=statecontainer;
      currentstate.save().then(() => res.status(200).send({state: currentstate}))
  })
};
 