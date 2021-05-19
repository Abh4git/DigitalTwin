//Instructions to execute script :
//mongo localhost:27017 mongodbinit.js

// Current Database name: dtwindb
db = db.getSiblingDB('dtwindb');




db.user.insert ({
    "_id" : ObjectId(),
    "username" : "basicuser",
    "email" : "basicuser@test.com",
    "enabled" : true,
    "password" : "$2a$10$CwoSE0B7FlUKrN2MVI4gCeAKmRoqLRXTTecb3BmrhLdOWA5zItITy",
    "roles" : [ 
        {
            "name" : "User"
        }
    ]
});
