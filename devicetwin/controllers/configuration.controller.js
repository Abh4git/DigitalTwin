const { configuration, mongoose } = require("../models");
const db = require("../models");
const Configuation = db.configuration;

/* Get Configuration based on Id  */
exports.getConfiguration = (req, res) => {
  let {configid}=req.params;
  console.log("Collect Configuration Details");
    Configuation.findById(configid)
      .exec((err, configuration) => {
        if (err) return res.status(500).send({ message: err })
        if (!configuration) return res.status(404).send({ message: "Configuration Not found." })
        res.status(200).json({configuration});
      });
};

/* Create Configuration */
exports.addConfiguration =  (req, res) => {
  console.log('Add Configuration invoked');
  let configid = mongoose.Types.ObjectId();
  let { title, description, inputs, outputs } = req.body
  var newConfiguration = new Configuation( { _id: configid, 
      title: title, description: description,
      inputs: inputs, outputs:outputs
  });
  newUserTaskProfile.save((err, newUserTaskProfileUpdated) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
     
      res.status(200).json({newUserTaskProfileUpdated});
    });
};

/*Update the Configuration*/
exports.updateConfiguration = (req, res) => {
  console.log("Updating Configuration")
  let {configid} = req.params;
  let { title, description, inputs, outputs } = req.body
  Configuation.findById(configid, (err, currentconfig) => {
    if (err) return res.status(500).send({message: err})
    if (!configuration) return res.status(404).send({ message: "Configuration Not found." })
      configuration.title=title;
      configuration.description=description;
      configuration.inputs=inputs;
      configuration.outputs=outputs;
      configuration.save().then(() => res.status(200).send({configuration: currentconfig}))
  })
};
