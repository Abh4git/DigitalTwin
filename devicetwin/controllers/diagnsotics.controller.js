const db = require("../models");
const Diagnostics = db.diagnostics;
const mongoose = require("mongoose");

/* Collect Diagnostic Information based on Id */
exports.getDiagnosticInformation = (req, res) => {
  Diagnostics.findById(req.params.id)
    .exec((err, diagnosticInfo) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!diagnosticInfo) {
        return res.status(404).send({ message: "Diagnostic Info Not found." });
      }

      res.status(200).json({diagnosticInfo});
    });
};


/* Create Diagnostic Information */
exports.createDiagnosticsInfo=  (req, res) => {
console.log("Create Diagnostic Information")
let { title, description, errortrace } = req.body
let _id = mongoose.Types.ObjectId();
let newDiagnosticInfo = new Diagnostics({
   _id,
  title,
   description,
  errortrace
});
newDiagnosticInfo.save((err, newDiagnosticInfoUpdated) => {
  if (err) return res.status(500).send({ message: err });
  res.status(200).json({newDiagnosticInfoUpdated});
})
};
 