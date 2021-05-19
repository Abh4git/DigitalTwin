const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



generateResponse = (user) => {
	let tempUser = {}
	tempUser.username = user.username
	tempUser.email = user.email
	tempUser.roles = [] 
	for (let i = 0; i < user.roles.length; i++) tempUser.roles.push("ROLE_" + user.roles[i].name.toUpperCase());
	tempUser.accessToken = jwt.sign(tempUser, config.secret, { expiresIn: 86400 })
	return tempUser
}



exports.signin = (req, res) => {
User.findOne({
	username: req.body.username
})
	//.populate("roles")
	.exec((err, user) => {
	if (err) {
		res.status(500).send({ message: err });
		return;
	}

	if (!user) {
		return res.status(404).send({ message: "User Not found." });
	}

	var passwordIsValid = bcrypt.compareSync(
		req.body.password,
		user.password
	);

	if (!passwordIsValid) {
		return res.status(401).send({
		accessToken: null,
		message: "Invalid Password!"
		});
	}

	res.status(200).send(generateResponse(user));
	});
};



exports.check = (req, res) => {
	if (!req.headers.authorization) return res.status(401).send({message: 'Unauthorized'});
	let { authorization } = req.headers;
	let accessToken = authorization.split('Bearer ')
	if (accessToken.length < 2) return res.status(401).send({message: 'Unauthorized'});
	accessToken = accessToken[1]
	jwt.verify(accessToken, config.secret, (err, data) => {
		if (err || !data) return res.status(200).send({loggedin: false, message: 'You are not logged in'})
		return res.status(200).send({loggedin: true, message: `You are ${data.username}`})
	})
};
