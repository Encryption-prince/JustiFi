const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

// only admin can access this route
router.get('/admin',verifyToken,authorizeRoles("admin"), (req, res) => {
    res.send('Welcome Admin');
});

// only lawyer can access this route
router.get('/lawyer',verifyToken,authorizeRoles("admin","lawyer"), (req, res) => {
    res.send('Welcome lawyer');
});

// all can access this route
router.get('/user',verifyToken,authorizeRoles("admin","lawyer","user"), (req, res) => {
    res.send('Welcome User');
});


module.exports = router;