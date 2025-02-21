const { Op } = require('sequelize');
const { Case } =require('../models/index');

class CaseRepository{
    async createCase(data ){
        console.log(data);
        try{
            const case1 = await Case.create( data );
            return case1;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCase(caseId){
        try{
            await Case.destroy({
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
            const case1 = await Case.findByPk(caseId);
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
            const case1 =await Case.findByPk(caseId);
            return case1;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async getAllCases(filter){
        try {
        if(filter.title){
            const cases = await Case.findAll({
                where:{
                    title: {
                        [Op.startsWith]:filter.title
                    }
                }
        });
        return cases;
        }
            const cases = await Case.findAll();
            return cases;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }

}

module.exports = {CaseRepository};