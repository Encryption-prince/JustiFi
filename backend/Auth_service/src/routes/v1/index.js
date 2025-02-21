const express = require('express');

const UserController = require('../../controllers/user-controller');
const LawyerController = require('../../controllers/lawyer-controller');
const CaseController= require('../../controllers/case-controller');
const UsercaseController = require('../../controllers/user_case-controller');
const LawyercaseController = require('../../controllers/lawyer_case-controller');
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

router.get('/lawyer',LawyerController.getAll);

router.post('/case',CaseController.create);
router.delete('/case/:id',CaseController.destroy);
router.get('/case/:id',CaseController.get);
router.get('/case', CaseController.getAll);
router.patch('/case/:id',CaseController.update);

router.post('/user-case',UsercaseController.create);
router.delete('/user-case/:id',UsercaseController.destroy);
//router.get('/user-case/:id',UsercaseController.get);
router.patch('/user-case/:id',UsercaseController.update);
router.get('/user-case/:id',UsercaseController.getCasesByUserId);

router.post('/lawyer-case',LawyercaseController.create);
router.delete('/lawyer-case/:id',LawyercaseController.destroy);
//router.get('/lawyer-case/:id',LawyercaseController.get);
router.patch('/lawyer-case/:id',LawyercaseController.update);
router.get('/lawyer-case/:id',LawyercaseController.getCasesByLawyerId);

module.exports = router;