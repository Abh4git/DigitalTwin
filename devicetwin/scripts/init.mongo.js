print('Start Database Scripts #################################################################');
db = db.getSiblingDB('assessmakedb');

//5 Skills as defined in assessmake21
db.skill.insert({
    "_id" : 1,
    "title" : "Collaboration",
    "description" : "21st century skills",
    "translation" : [ 
        {
            "language" : "swedish",
            "title" : "Samarbete"
        }, 
        {
            "language" : "greek",
            "title" : "Συνεργασία"
        }
    ]
});
db.skill.insert({
    "_id" : 2,
    "title" : "Creativity",
    "description" : "21st century skills",
    "translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kreativitet"
        }, 
        {
            "language" : "greek",
            "title" : "Δημιουργικότητα"
        }
    ]
}

);
db.skill.insert({
    "_id" : 3,
    "title" : "Problem-Solving",
    "description" : "21st century skills",
    "translation" : [ 
        {
            "language" : "swedish",
            "title" : "Problem - Lösning"
        }, 
        {
            "language" : "greek",
            "title" : "Πρόβλημα - Επίλυση"
        }
    ]
}

);
db.skill.insert({
    "_id" : 4,
    "title" : "Life/Social",
    "description" : "21st century skills",
    "translation" : [ 
        {
            "language" : "swedish",
            "title" : "Liv / socialt"
        }, 
        {
            "language" : "greek",
            "title" : "Ζωή / Κοινωνική"
        }
    ]
}

);
db.skill.insert({
    "_id" : 5,
    "title" : "Communication",
    "description" : "21st century skills",
    "translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kommunikation"
        }, 
        {
            "language" : "greek",
            "title" : "Επικοινωνία"
        }
    ]
}

);
// first cut tasks related to these skills
db.task.insert({
    "_id" : 1,
    "title" : "What is collaboration?",
    "description" : "Collaborative learning is an active form of learning between two or more individuals that work together in a physical or virtual environment. Genuine collaborators share these attributes when taking part in projects that require construction of socially shared meaning. These attributes include:",
    "time_dependent" : false,
    "answers" : [],
    "scoring_choice" : 0,
    "scoring_detail" : "",
    "scoring_processing" : "",
    "type" : 1,
    "body" : [ 
		{"tagid": 1, "tag": "Develop shared good relationships", "detail": "[Identify, evaluate and achieve joint goals, Establish practices associated with different roles in a group (e.g., leader, team member),Gather together relevant resources and information]"},
		{"tagid": 2, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language]"},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"},
		{"tagid": 4, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"},
		{"tagid": 5, "tag": "Develop good relationships with others and a sense of well-being in a group", "detail": "[Appreciate individual contributions made by each team member, Recognise what behaviour is appropriate in a given situation and act accordingly, Be flexible and willing to help when it is needed to make compromises, to achieve a common goal, Have an unbiased and accepting attitude towards new and diverse perspectives of group members ]"}
    ],
    "related_skillid" : 1,
    "skill_sequencenumber" : 1,
	"translation" : [ 
        {
            "language" : "swedish",
            "title" : "Vad är samarbete?",
			"description" : "Samarbetsinlärning är en aktiv inlärningsform mellan två eller flera individer som arbetar tillsammans i en fysisk eller virtuell miljö. Äkta medarbetare delar dessa attribut när de deltar i projekt som kräver konstruktion av socialt delad mening. Dessa attribut inkluderar:",
			"body" : [ 
		{"tagid": 1, "tag": "Develop shared good relationships", "detail": "[Identify, evaluate and achieve joint goals, Establish practices associated with different roles in a group (e.g., leader, team member),Gather together relevant resources and information]"},
		{"tagid": 2, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language]"},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"},
		{"tagid": 4, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"},
		{"tagid": 5, "tag": "Develop good relationships with others and a sense of well-being in a group", "detail": "[Appreciate individual contributions made by each team member, Recognise what behaviour is appropriate in a given situation and act accordingly, Be flexible and willing to help when it is needed to make compromises, to achieve a common goal, Have an unbiased and accepting attitude towards new and diverse perspectives of group members ]"}
					]
			
        }, 
        {
            "language" : "greek",
            "title" : "Τι είναι η συνεργασία;",
			"description" : "Η συνεργατική μάθηση είναι μια ενεργή μορφή μάθησης μεταξύ δύο ή περισσότερων ατόμων που συνεργάζονται σε ένα φυσικό ή εικονικό περιβάλλον. Οι γνήσιοι συνεργάτες μοιράζονται αυτά τα χαρακτηριστικά όταν συμμετέχουν σε έργα που απαιτούν την κατασκευή κοινωνικά κοινής σημασίας. Αυτά τα χαρακτηριστικά περιλαμβάνουν:",
			"body" : [ 
		{"tagid": 1, "tag": "Develop shared good relationships", "detail": "[Identify, evaluate and achieve joint goals, Establish practices associated with different roles in a group (e.g., leader, team member),Gather together relevant resources and information]"},
		{"tagid": 2, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language]"},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"},
		{"tagid": 4, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"},
		{"tagid": 5, "tag": "Develop good relationships with others and a sense of well-being in a group", "detail": "[Appreciate individual contributions made by each team member, Recognise what behaviour is appropriate in a given situation and act accordingly, Be flexible and willing to help when it is needed to make compromises, to achieve a common goal, Have an unbiased and accepting attitude towards new and diverse perspectives of group members ]"}
					]
        }
    ]
	
});

db.task.insert({
   "_id" : 2,
    "title" : "What is Creativity?",
    "description" : "Creativity is considered one of the key skills for learners who prepare for complex life and work environments in the 21st century. Creative thinking can be seen as an individual or collaborative reflective iterative process whose goal is to design a new.These attributes include:",
    "time_dependent" : false,
    "answers" : [],
    "scoring_choice" : 0,
    "scoring_detail" : "",
    "scoring_processing" : "",
    "type" : 1,
    "body" : [ 
		{"tagid": 1, "tag": "Generate new ideas", "detail": "[Generate new ideas and develop them in practice,Utilise a broad range of idea creation techniques (e.g., brainstorming, online tools, etc.), Note down various ideas (number and range), Implement iteration to re-frame problems in order to enable new, surprising and valuable ideas or artefacts to emerge]"},
		{"tagid": 2, "tag": "Experiment", "detail": "[Generate a number of alternative interventions, Observe patterns and recognise connections, Demonstrate originality and inventiveness in your work, Cultivate the relevant mindset behind optimal learning and creativity,Create a profound understanding of the topic you are dealing as well as making it meaningful through investing the self while making it, Master a tool to have the skills and confidence to express and communicate your ideas]"},
		{"tagid": 3, "tag": "Implement ideas", "detail": "[Elaborate, refine, analyse and evaluate your own ideas in order to improve and maximise creative efforts for a specific purpose, Recognise the real-world limits to adopting new ideas, Act on creative ideas to make a tangible and useful contribution to the field in which the innovation will occur,	View failure as an opportunity to learn; understand that creativity and innovation is a long-term, cyclical process of small successes and frequent mistakes]"},
    ],
    "related_skillid" : 1,
    "skill_sequencenumber" : 1,
	"translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kommunikation",
			"description" : "Kommunikation",
			"body" : [ 
		{"tagid": 1, "tag": "Develop shared good relationships", "detail": "[Identify, evaluate and achieve joint goals, Establish practices associated with different roles in a group (e.g., leader, team member),Gather together relevant resources and information]"},
		{"tagid": 2, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language]"},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"}
    ]
			
        }, 
        {
            "language" : "greek",
            "title" : "Επικοινωνία",
			"description" : "Kommunikation",
			"body" : [ 
		{"tagid": 1, "tag": "Develop shared good relationships", "detail": "[Identify, evaluate and achieve joint goals, Establish practices associated with different roles in a group (e.g., leader, team member),Gather together relevant resources and information]"},
		{"tagid": 2, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language]"},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": "[Review the work of the group, Resolve conflict through explicit discussion with the group members to the extent, Needed to restore a sense of shared understanding, Provide frequent feedback in the group through subtle word choices, inflections, gaze, body language, Reflect on your own contribution]"}
        ] }
    ]
});

db.task.insert({
   "_id" : 3,
    "title" : "What were you doing that made you pick?",
    "description" : "What were you doing that made you pick?",
    "time_dependent" : false,
    "answers" : [],
    "scoring_choice" : 0,
    "scoring_detail" : "",
    "scoring_processing" : "",
    "type" : 1,
    "body" : [ 
		{"tagid": 1, "tag": "Working by myself", "detail": ""},
		{"tagid": 2, "tag": "Partner work", "detail": ""},
		{"tagid": 3, "tag": "Group work", "detail": ""},
		{"tagid": 4, "tag": "Entire class work", "detail": ""},
		{"tagid": 5, "tag": "Other", "detail": ""}
    ],
    "related_skillid" : 1,
    "skill_sequencenumber" : 1,
	"translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kommunikation",
			"description" : "Kommunikation",
			"body" : [ 
		{"tagid": 1, "tag": "Working by myself", "detail": ""},
		{"tagid": 2, "tag": "Partner work", "detail": ""},
		{"tagid": 3, "tag": "Group work", "detail": ""},
		{"tagid": 4, "tag": "Entire class work", "detail": ""},
		{"tagid": 5, "tag": "Other", "detail": ""}
    ]
			
        }, 
        {
            "language" : "greek",
            "title" : "Επικοινωνία",
			"description" : "Kommunikation",
			"body" : [ 
		{"tagid": 1, "tag": "Working by myself", "detail": ""},
		{"tagid": 2, "tag": "Partner work", "detail": ""},
		{"tagid": 3, "tag": "Group work", "detail": ""},
		{"tagid": 4, "tag": "Entire class work", "detail": ""},
		{"tagid": 5, "tag": "Other", "detail": ""}
		]}
		]
});

db.task.insert({
   "_id" : 4,
    "title" : "What were you doing that made you pick?",
    "description" : "What were you doing that made you pick?",
    "time_dependent" : false,
    "answers" : [],
    "scoring_choice" : 0,
    "scoring_detail" : "",
    "scoring_processing" : "",
    "type" : 1,
    "body" : [ 
		{"tagid": 1, "tag": "Develop shared understanding", "detail": ""},
		{"tagid": 2, "tag": "Contribute collectively ", "detail": ""},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": ""},
		{"tagid": 4, "tag": "Develop good relationships with others and a sense of well-being in a community", "detail": ""}
    ],
    "related_skillid" : 1,
    "skill_sequencenumber" : 1,
	"translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kommunikation",
			"description" : "Kommunikation",
			"body" : [ 
		{"tagid": 1, "tag": "Develop shared understanding", "detail": ""},
		{"tagid": 2, "tag": "Contribute collectively ", "detail": ""},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": ""},
		{"tagid": 4, "tag": "Develop good relationships with others and a sense of well-being in a community", "detail": ""}
    ]
			
        }, 
        {
            "language" : "greek",
            "title" : "Επικοινωνία",
			"description" : "Kommunikation",
			"body" : [ 
		{"tagid": 1, "tag": "Develop shared understanding", "detail": ""},
		{"tagid": 2, "tag": "Contribute collectively ", "detail": ""},
		{"tagid": 3, "tag": "Regulate the work of the group", "detail": ""},
		{"tagid": 4, "tag": "Develop good relationships with others and a sense of well-being in a community", "detail": ""}
		]}
		]
});

db.task.insert({
   "_id" : 5,
    "title" : "What prompted you to?",
    "description" : "What prompted you to?",
    "time_dependent" : false,
    "answers" : [],
    "scoring_choice" : 0,
    "scoring_detail" : "",
    "scoring_processing" : "",
    "type" : 1,
    "body" : [   ],
    "related_skillid" : 1,
    "skill_sequencenumber" : 1,
	"translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kommunikation",
			"description" : "Kommunikation",
			"body" : [ ]
			
        }, 
        {
            "language" : "greek",
            "title" : "Επικοινωνία",
			"description" : "Kommunikation",
			"body" : [   ]
		}
		]
});

db.task.insert({
   "_id" : 5,
    "title" : "What prompted you to?",
    "description" : "What prompted you to?",
    "time_dependent" : false,
    "answers" : [],
    "scoring_choice" : 0,
    "scoring_detail" : "",
    "scoring_processing" : "",
    "type" : 1,
    "body" : [   ],
    "related_skillid" : 1,
    "skill_sequencenumber" : 1,
	"translation" : [ 
        {
            "language" : "swedish",
            "title" : "Kommunikation",
			"description" : "Kommunikation",
			"body" : [ ]
			
        }, 
        {
            "language" : "greek",
            "title" : "Επικοινωνία",
			"description" : "Kommunikation",
			"body" : [   ]
		}
		]
});

db.user.insert ({
    "_id" : ObjectId("507f191e810c19729de860ea"),
    "username" : "assessmakeadmin",
    "email" : "assessmake@gmail.com",
    "enabled" : true,
    "password" : "$2a$08$Spax3cstgrWqOJoorCMqaunLDTzG1rRRPyUtLSOFG2.f8QJdaQbx6",
    "roles" : [ 
        {
            "name" : "Admin"
        }, 
        {
            "name" : "User"
        }
    ]
});

db.user.insert ({
    "_id" : ObjectId("6012dfd7bb935cba40d36b1b"),
    "username" : "asessmakeuser",
    "email" : "assessmake@gmail.com",
    "enabled" : true,
    "password" : "$2a$08$Spax3cstgrWqOJoorCMqaunLDTzG1rRRPyUtLSOFG2.f8QJdaQbx6",
    "roles" : [ 
        {
            "name" : "User"
        }
    ]
});

print('END Database scripts#################################################################');