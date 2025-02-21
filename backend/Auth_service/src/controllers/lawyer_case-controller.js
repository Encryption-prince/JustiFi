const { response } = require('express');
const {LawyercaseService} = require('../services/lawyer_case-service');

const lawyercaseService= new LawyercaseService();

const create =async (req,res)=>{
    //console.log(req.body);
    try {
        const case1 = await lawyercaseService.createCase({
            lawyer_id: req.body.lawyer_id,
            cases: req.body.cases,
    

        });
        return res.status(201).json({
            data: case1,
            success:true,
            message: 'succesfully created a case',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a case',
            err: error
        });
    }
}
const destroy = async (req,res)=>{
    try {
        const response = await lawyercaseService.deleteCase(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully deleted the case',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the case',
            err: error
        });
    }
}

const get =async (req,res)=>{
    try {
        const response = await lawyercaseService.getCase(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully fetched the case',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the case',
            err: error
        });
    }
}
//Patch -> /city/:id->req.body
const update =async (req,res)=>{
    try {
        const response = await lawyercaseService.updateCase(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully updated the case',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the case',
            err: error
        });
    }
}

const getCasesByLawyerId = async (req, res) => {
    try {
        const { lawyer_id } = req.params.id; // Extract lawyer_id from request params
        //console.log(lawyer_id);
        const cases = await lawyercaseService.getCasesByLawyerId(req.params.id);
        
        return res.status(200).json({
            data: cases,
            success: true,
            message: 'Successfully fetched cases for the lawyer',
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer:", error);
        
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the cases',
            err: error
        });
    }
};


module.exports={
    create,
    destroy,
    get,
    update,
    getCasesByLawyerId
}