const { response } = require('express');
const LawyerService = require('../services/lawyer-service');

const lawyerService = new LawyerService();

const create = async (req, res) => {
    try {
        const response = await lawyerService.create({
            email: req.body.email,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            license_number: req.body.license_number,
            specialization: req.body.specialization,
            experience: req.body.experience,
            bar_association: req.body.bar_association,
            phone: req.body.phone,
            address: req.body.address,


        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new lawyer',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

const signIn = async (req, res) => {
    try {
        console.log(req.body.email);
        console.log(req.body.password);
        const response = await lawyerService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await lawyerService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'user is authenticated and token is valid'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

const getAll = async (req,res)=>{
    try {
        const response = await lawyerService.getAllLawyers(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            err: {},
            message:'Successfully fetched the lawyers'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able get lawyers',
            err: error
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    getAll
}