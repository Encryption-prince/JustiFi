const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

// only admin can access this route
router.get('/admin',verifyToken,authorizeRoles("admin"), (req, res) => {
    res.send('Welcome Admin');
});

// only manager can access this route
router.get('/manager',verifyToken,authorizeRoles("admin","manager"), (req, res) => {
    res.send('Welcome Manager');
});

// all can access this route
router.get('/user',verifyToken,authorizeRoles("admin","manager","user"), (req, res) => {
    res.send('Welcome User');
});


module.exports = router;