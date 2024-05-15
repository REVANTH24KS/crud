const Userdb = require('../model/model');

// Create and save a new user
exports.create = (req, res) => {
    // Validate request body
    if (!req.body || !req.body.name || !req.body.email || !req.body.gender || !req.body.status) {
        res.status(400).send({ message: "Please provide all required fields." });
        return;
    }

    // Create a new user instance
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    // Save user in the database
    user.save()
        .then(data => {
            // res.send(data);
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve all users
exports.find = (req, res) => {

    if(req.query.id){
        const id=req.query.id;

        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user" + id});
            }
            else{
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving user with id" + id});
        });
    }
    else{
        Userdb.find()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving users."
                });
            });
    }
};

// Update a user by id
exports.update = (req, res) => {
    const id = req.params.id;

    // Validate request body
    if (!req.body || (!req.body.name && !req.body.email && !req.body.gender && !req.body.status)) {
        return res.status(400).json({ message: "Please provide fields to update." });
    }

    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).json({ message: `Cannot update user with id=${id}. User not found.` });
            }
            res.status(200).json({ message: "User was updated successfully." });
        })
        .catch(err => {
            console.error("Error updating user:", err);
            res.status(500).json({ message: "Internal Server Error" });
        });
};


// Delete a user by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete user with id=${id}. User not found.`
                });
            } else {
                res.send({
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id=" + id
            });
        });
};

