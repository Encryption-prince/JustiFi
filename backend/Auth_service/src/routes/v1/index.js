const express = require('express');

const UserController = require('../../controllers/user-controller');
const LawyerController = require('../../controllers/lawyer-controller');
const {AuthRequestValidators} = require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup', 
    AuthRequestValidators.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
)

router.post(
    '/lawyer-signup', 
    AuthRequestValidators.validateUserAuth,
    LawyerController.create
);
router.post(
    '/lawyer-signin',
    AuthRequestValidators.validateUserAuth,
    LawyerController.signIn
);

router.get(
    '/lawyer-isAuthenticated',
    LawyerController.isAuthenticated
)

module.exports = router;