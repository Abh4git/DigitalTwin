const mongoose = require("mongoose");

const Application = require("../models/application.model");

/* Collect Application Information based on Id */
exports.getApplicationInformation = (req, res) => {
    Application.findById(req.params.id)
      //.populate('location')
      .exec((err, appInfo) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!appInfo) {
          return res.status(404).send({ message: "Application Not found." });
        }
  
        res.status(200).json({appInfo});
      });
  };


/* Create Application */
exports.createApplication=  (req, res) => {
  console.log("Create Application")
  let { inputs, outputs, value } = req.body
  let _id = mongoose.Types.ObjectId();
  let newAppInfo = new Application({
     _id,
    value,
     inputs,
    outputs
  });
  newAppInfo.save((err, newAppInfoUpdated) => {
    if (err) return res.status(500).send({ message: err });
    res.status(200).json({newAppInfo});
  })
};
 