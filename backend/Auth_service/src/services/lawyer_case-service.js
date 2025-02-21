const { LawyercaseRepository }= require('../repository/lawyer_case-repository');

class LawyercaseService{
    constructor(){
        this.lawyercaseRepository= new LawyercaseRepository();
    }
    async createCase(data){
        //console.log(data);
        try{
            const case1= await this.lawyercaseRepository.createCase(data);
            return case1;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCase(caseId){
        try{
            const response = this.lawyercaseRepository.deleteCase(caseId);
            return response;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async updateCase(caseId,data){
        try{
            const case1= await this.lawyercaseRepository.updateCase(caseId,data);
            return case1;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getCase(caseId){
        try{
            const city= await this.lawyercaseRepository.getCase(caseId);
            return city;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getCasesByLawyerId(lawyerId) {
        try {
            const cases = await this.lawyercaseRepository.getCasesByLawyerId(lawyerId);
            return cases;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

}
module.exports = {LawyercaseService};