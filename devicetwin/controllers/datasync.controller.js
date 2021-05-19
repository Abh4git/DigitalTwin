
var fs = require('fs');
const config = require("../config/auth.config");
const db = require("../models");
const Skill = db.skill;
const path = require("path");
const { user } = require('../models');

const mongoose = require("mongoose");

/*************************************************/
/*    File: datainit.controller.js               */
/*    Purpose : Only used for Database image     */
/*    population for a Skill. The icon for a     */
/*    skillgets populated by a PUT request.      */
/*    Only invoked as part of setup. updatecode:007*/
/*************************************************/

exports.updateIconsForSkills =  (req, res) => {
    console.log('Upadating icons for all skills invoked');
    console.log(req.body.updatecode);
    const updatecode=req.body.updatecode;
    //path is /uploads in api folder
    
    //all icons list
    let imagelist=['collaboration.png', 'creativity.png','problemsolving.png','lifesocial.png','communication.png'];
    //First Skill
    if (updatecode=='007')
    {
    
        var skillidValue = 1;
    
        //First find the skill based on Id amd Upate it
    
        var success1= this.findAndUpdateaSkill(res,1,imagelist[0]);
        var success2= this.findAndUpdateaSkill(res,2,imagelist[1]);
        var success3= this.findAndUpdateaSkill(res,3,imagelist[2]);
        var success4= this.findAndUpdateaSkill(res,4,imagelist[3]);
        var success5= this.findAndUpdateaSkill(res,5,imagelist[4]);
        if (success1&&success2&&success3&&success4&&success5)
        {
            res.status(200).json({message:'Updated successfully.',skillids:[1,2,3,4,5]});
        }
        
    } else
    {
        res.status(200).json({message:"Updatecode incorrect."});
    }

    res.status(200).json({message:"Operation successful"});
    
  };


  exports.findAndUpdateaSkill=(res,skillidValue,imagefilename)=>{
    var updateSuccess=false;
    var dirname = path.resolve("./");
    var fullPath= path.join(dirname, '/uploads/')
    Skill.findById( skillidValue )
    .exec((err, skill) => {   
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!skill) {
        return res.status(404).send({ message: "Skill Not found for id :" + skillidValue  });
      }
      skill.img ={ 
        data: fs.readFileSync( fullPath + imagefilename ),
        contentType: 'image/png'
      }

      skill.save((err, updatedSkill) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
       
        updateSuccess= true;
      });
      
    });
    
    return updateSuccess;
};


//For updating One skill at a time.

  exports.updateSkillIcon =  (req, res) => {
    console.log('Add Skillicon invoked');
    console.log(req.body.skillid);
    console.log("./ : ", path.resolve("./")); 
    var temp_filename ="collaboration.png" ; 
    var temp_dirname = path.resolve("./");
    var skillidValue = parseInt(req.body.skillid);
    Skill.replaceOne({_id: skillidValue}, { _id: skillidValue, 
        title: "Collaboration", description: "21st century skills",
        translations : [ 
            {
                _id : mongoose.Types.ObjectId(),
                langcode : "sv",
                title : "Samarbete"
            }, 
            {
                _id : mongoose.Types.ObjectId(),
                langcode : "el",
                title : "Συνεργασία"
            }
        ],
        img:{ 
            data: fs.readFileSync( path.join(temp_dirname+ '/uploads/' + temp_filename)),
            contentType: 'image/png'
        }
    })
    .exec((err, skill) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!skill) {
        return res.status(404).send({ message: "Skill Not found." });
      }

     
       
        res.status(200).json(skill);
      
    });

   
    
  };

//for adding skills (Not Exposed Externally)
//Some hardcoding for Collaboation as a skill
  exports.addSkill = (req, res) => {
    console.log('Add Skill invoked');
    console.log(req.body.skillid);
    var skillid = req.body.skillid;
    var temp_filename ="collaboration.png" ; 
    var temp_dirname = path.resolve("./");
    var pathFull = path.join(temp_dirname, '/uploads/' , temp_filename);
    console.log("Path:", pathFull);
    var newSkill = new Skill( { _id: skillid, 
        title: "Collaboration", description: "21st century skills",
        translations : [ 
            {
                _id : mongoose.Types.ObjectId(),
                langcode : "sv",
                title : "Samarbete"
            }, 
            {
                _id : mongoose.Types.ObjectId(),
                langcode : "el",
                title : "Συνεργασία"
            }
        ],
        img:{ 
            data: fs.readFileSync( pathFull),
            contentType: 'image/png'
        }
    });
    newSkill.save((err, updatedSkill) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
       
        res.status(200).send({
          id: updatedSkill._id,
          title: updatedSkill.title
        });
      });
  };