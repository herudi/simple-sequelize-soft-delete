const { Brand, Sequelize } = require('./../../models/index');

class BrandService {
    async findAll() {
        const data = await Brand.findAll();
        return { statusCode: 200, data };
    }

    async findById(id) {
        const data = await Brand.findByPk(id);
        return { statusCode: 200, data };
    }

    async search(query) {
        const Op = Sequelize.Op;
        let arr = [];
        for (const k in query) {
            arr.push({
                [k]: {
                    [Op.like]: '%' + query[k] + '%'
                }
            });
        };
        const data = await Brand.findAll({
            where: { [Op.and]: arr }
        });
        return { statusCode: 200, data };
    }

    async save(body){
        await Brand.create(body);
        return { statusCode: 201, message: 'Success create brand' };
    }

    async update(id, body){
        await Brand.update(body, {
            where: { id }
        });
        return { statusCode: 200, message: 'Success update brand' };
    }

    async delete(id){
        await Brand.destroy({
            where: { id }
        });
        return { statusCode: 200, message: 'Success delete brand' };
    }
}

module.exports = BrandService;