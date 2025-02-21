const { response } = require('express');
const {CaseService} = require('../services/case-service');

const caseService= new CaseService();

const create =async (req,res)=>{
    //console.log(req.body);
    try {
        const case1 = await caseService.createCase({
            case_number: req.body.case_number,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            lawyers: req.body.lawyers,
            clients: req.body.clients,
            filed_date: req.body.filed_date,
            closed_date: req.body.closed_date,
            verdict: req.body.verdict,


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
        const response = await caseService.deleteCase(req.params.id);
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
        const response = await caseService.getCase(req.params.id);
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
        const response = await caseService.updateCase(req.params.id,req.body);
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

const getAll =async (req,res)=>{
    try {
        const cities = await caseService.getAllCases(req.query);
        return res.status(200).json({
            data: cities,
            success:true,
            message: 'succesfully fetched the cases',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the cases',
            err: error
        });
    }
}


module.exports={
    create,
    destroy,
    get,
    update,
    getAll,
}