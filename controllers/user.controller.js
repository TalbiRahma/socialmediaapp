const User = require('../models/user.model')

exports.signup = (req, res)=>{

    
    const data = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
        bio : req.body.bio,
        picture : req.body.picture,
        birthdate : req.body.birthdate
    }

    const _user = new User(data);

    _user.save().then(
        (createdUser) => {
            res.status(200).json({message : "User added successfully ..."})
        }
    ).catch(
        (err) => {
            res.status(400).json({ message : "Probleme while adding the user."})
        }
    )
}