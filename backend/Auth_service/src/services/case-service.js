const { CaseRepository }= require('../repository/case-repository');

class CaseService{
    constructor(){
        this.caseRepository= new CaseRepository();
    }
    async createCase(data){
        //console.log(data);
        try{
            const case1= await this.caseRepository.createCase(data);
            return case1;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCity(caseId){
        try{
            const response = this.caseRepository.deleteCase(caseId);
            return response;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async updateCity(caseId,data){
        try{
            const case1= await this.caseRepository.updateCase(caseId,data);
            return case1;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getCase(caseId){
        try{
            const city= await this.caseRepository.getCase(caseId);
            return city;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAllCases(filter){
        try{
            const cities = await this.caseRepository.getAllCases(filter);
            return cities;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}
module.exports = {CaseService};