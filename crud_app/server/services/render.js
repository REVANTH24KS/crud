const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            res.render('index', { users: response.data }); 
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};

exports.add_user = (req, res) => {
    // Assuming you have some logic here
    res.render('add_user'); // Renders the 'add_user' view
};

exports.update_user = (req, res) => {
    const userId = req.query.id;
    axios.get(`http://localhost:3000/api/users`, { params: { id: req.query.id } })
        .then(function(userdata) {
            res.render("update_user", { user: userdata.data });
        })
        .catch(err => {
            res.send(err);
        });
};
