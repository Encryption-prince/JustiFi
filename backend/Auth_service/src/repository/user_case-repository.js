const { Op } = require('sequelize');
const { UserCases } =require('../models/index');

class UsercaseRepository{
    async createCase(data ){
        console.log(UserCases);
        console.log(data);
        try{
            const case1 = await UserCases.create( data );
            return case1;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCase(caseId){
        try{
            await UserCases.destroy({
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
            const case1 = await UserCases.findByPk(caseId);
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
            const case1 =await UserCases.findByPk(caseId);
            return case1;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    
    async getCasesByUserId(userId) {
        try {
            const cases = await UserCases.findAll({
                where: {
                    user_id: userId
                }
            });
            return cases;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }

}

module.exports = {UsercaseRepository};