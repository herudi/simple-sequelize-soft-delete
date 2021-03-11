const { Item, Brand, Sequelize } = require('./../../models/index');

const brandInclude = {
    model: Brand,
    as: 'brand',
    attributes: ['id', 'name']
}
class ItemService {
    async findAll() {
        const data = await Item.findAll({
            include: brandInclude
        });
        return { statusCode: 200, data };
    }

    async findById(id) {
        const data = await Item.findOne({
            include: brandInclude,
            where: { id }
        });
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
        const data = await Item.findAll({
            include: brandInclude,
            where: { [Op.and]: arr }
        });
        return { statusCode: 200, data };
    }

    async save(body){
        await Item.create(body);
        return { statusCode: 201, message: 'Success create item' };
    }

    async update(id, body){
        await Item.update(body, {
            where: { id }
        });
        return { statusCode: 200, message: 'Success update item' };
    }

    async delete(id){
        await Item.destroy({
            where: { id }
        });
        return { statusCode: 200, message: 'Success delete item' };
    }
}

module.exports = ItemService;