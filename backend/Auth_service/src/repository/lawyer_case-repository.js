const { Op } = require('sequelize');
const { LawyerCase } =require('../models/index');

class LawyercaseRepository{
    async createCase(data ){
        //console.log(UserCases);
        console.log(data);
        try{
            const case1 = await LawyerCase.create( data );
            return case1;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCase(caseId){
        try{
            await LawyerCase.destroy({
                where:{
                    id: caseId
                }
            });
            return true;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async updateCase(caseId,data){
        try{
            //below approach also works but will not return updated object
            // const city = await City.update(data,{
            //     where:{
            //         id: cityId
            //     }
            // });
            // return city;
            //for getting updated data in mysql we use below approach
            const case1 = await LawyerCase.findByPk(caseId);
            case1.name=data.name;
            await case1.save();
            return case1;

        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async getCase(caseId){
        try{
            const case1 =await LawyerCase.findByPk(caseId);
            return case1;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    
    async getCasesByLawyerId(lawyerId) {
        try {
            const cases = await LawyerCase.findAll({
                where: {
                    lawyer_id: lawyerId
                }
            });
            return cases;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }

}

module.exports = {LawyercaseRepository};