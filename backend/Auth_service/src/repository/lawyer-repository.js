const { Lawyer } = require('../models/index');

class LawyerRepository {
    #createFilter(data){
        let filter={};
        if(data.firstname){
            filter.firstname = data.firstname;
        }
        if(data.specialization){
            filter.specialization = data.specialization;
        }
        return filter;
    }

    async create(data) {
        try {
            const user = await Lawyer.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userId) {
        try {
            await Lawyer.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await Lawyer.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await Lawyer.findOne({where: {
                email: userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getAllLawyers(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const lawyers = await Lawyer.findAll({
                where: filterObject
            });
            return lawyers;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = LawyerRepository;