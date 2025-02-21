const { UsercaseRepository }= require('../repository/user_case-repository');

class UsercaseService{
    constructor(){
        this.usercaseRepository= new UsercaseRepository();
    }
    async createCase(data){
        //console.log(data);
        try{
            const case1= await this.usercaseRepository.createCase(data);
            return case1;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCase(caseId){
        try{
            const response = this.usercaseRepository.deleteCase(caseId);
            return response;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async updateCase(caseId,data){
        try{
            const case1= await this.usercaseRepository.updateCase(caseId,data);
            return case1;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getCase(caseId){
        try{
            const city= await this.usercaseRepository.getCase(caseId);
            return city;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getCasesByUserId(userId) {
        try {
            const cases = await this.usercaseRepository.getCasesByUserId(userId);
            return cases;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

}
module.exports = {UsercaseService};