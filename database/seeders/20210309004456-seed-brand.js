'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('brand', [
            {
                id: '249bc87b-d9be-44f3-a3a3-f80c08bb1937',
                name: 'Odol',
                status: 1,
                description: null,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('brand', null, {});
    }
};
